import emailjs from "@emailjs/browser";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

async function sendViaEmailJs(payload: ContactMessage): Promise<void> {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      title: "Portfolio Contact Form",
      time: new Date().toLocaleString(),
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
}

async function sendViaWeb3Forms(payload: ContactMessage): Promise<void> {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: payload.name,
      email: payload.email,
      message: payload.message,
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Web3Forms submission failed");
  }
}

/**
 * Sends a contact form message via EmailJS, falling back to Web3Forms if EmailJS
 * is unconfigured or its request fails. Throws if neither service is configured
 * or if the fallback also fails.
 */
export async function sendContactMessage(payload: ContactMessage): Promise<void> {
  const hasEmailJs = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
  const hasWeb3Forms = Boolean(WEB3FORMS_ACCESS_KEY);

  if (hasEmailJs) {
    try {
      await sendViaEmailJs(payload);
      return;
    } catch (error) {
      if (!hasWeb3Forms) throw error;
    }
  }

  if (hasWeb3Forms) {
    await sendViaWeb3Forms(payload);
    return;
  }

  throw new Error(
    "No email service configured. Set VITE_EMAILJS_* or VITE_WEB3FORMS_ACCESS_KEY in your .env file.",
  );
}
