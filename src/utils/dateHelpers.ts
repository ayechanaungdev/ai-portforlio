interface DurationParts {
  years: number;
  months: number;
}

function getDurationParts(startDate: string, endDate: string): DurationParts {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (end.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years: Math.max(years, 0), months: Math.max(months, 0) };
}

/** Computes a person's current age in whole years from an ISO 8601 birth date (YYYY-MM-DD). */
export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hadBirthdayThisYear) age -= 1;

  return age;
}

/**
 * Formats the duration between two ISO 8601 dates (YYYY-MM-DD) as a localized string,
 * e.g. "2 yrs 3 mos" / "2年3ヶ月". Omitting `endDate` measures up to today.
 */
export function calculateDuration(
  startDate: string,
  endDate?: string,
  lang: "en" | "jp" = "en",
): string {
  const end = endDate ?? new Date().toISOString().slice(0, 10);
  const { years, months } = getDurationParts(startDate, end);

  if (lang === "jp") {
    const parts: string[] = [];
    if (years > 0) parts.push(`${years}年`);
    if (months > 0 || years === 0) parts.push(`${months}ヶ月`);
    return parts.join("");
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0 || years === 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
