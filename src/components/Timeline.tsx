import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { calculateDuration } from "../utils/dateHelpers";
import portfolioData from "../data/portfolioData.json";
import type { PortfolioData } from "../types/portfolio";

const data = portfolioData as PortfolioData;

const COPY = {
  en: { title: "Experience & Education", work: "Work Experience", education: "Education", present: "Present" },
  jp: { title: "経歴・学歴", work: "職務経歴", education: "学歴", present: "現在" },
};

type Tab = "work" | "education";

interface TimelineEntry {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  tags: string[];
}

export default function Timeline() {
  const { language } = useLanguage();
  const copy = COPY[language];
  const [tab, setTab] = useState<Tab>("work");

  const entries: TimelineEntry[] =
    tab === "work"
      ? data.workExperience.map((item) => ({
          id: item.id,
          title: item.role[language],
          subtitle: item.company[language],
          location: item.location[language],
          startDate: item.startDate,
          endDate: item.endDate,
          description: item.description[language],
          tags: item.technologies,
        }))
      : data.education.map((item) => ({
          id: item.id,
          title: item.degree[language],
          subtitle: item.institution[language],
          location: item.location[language],
          startDate: item.startDate,
          endDate: item.endDate,
          description: item.description[language],
          tags: [],
        }));

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-h">{copy.title}</h2>
        </motion.div>

        <div className="mt-8 inline-flex rounded-full border border-border p-1">
          <button
            type="button"
            onClick={() => setTab("work")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === "work" ? "bg-gradient-to-r from-accent to-accent-2 text-white" : "text-text"
            }`}
          >
            <Briefcase size={14} />
            {copy.work}
          </button>
          <button
            type="button"
            onClick={() => setTab("education")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === "education" ? "bg-gradient-to-r from-accent to-accent-2 text-white" : "text-text"
            }`}
          >
            <GraduationCap size={14} />
            {copy.education}
          </button>
        </div>

        <div className="mt-10 space-y-8 border-l border-border pl-8">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-accent to-accent-2" />
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {calculateDuration(entry.startDate, entry.endDate ?? undefined, language)}
                {!entry.endDate && ` · ${copy.present}`}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-text-h">{entry.title}</h3>
              <p className="text-sm text-text">
                {entry.subtitle} · {entry.location}
              </p>
              <p className="mt-2 text-sm text-text">{entry.description}</p>
              {entry.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
