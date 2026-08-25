import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="mono text-sm text-[var(--color-accent)] mb-2">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
          Let&apos;s build something worth benchmarking.
        </h2>
        <p className="text-[var(--color-text-dim)] max-w-xl mx-auto mb-9">
          Open to AI/ML engineering and LLM application roles. The fastest way to reach me is email.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-[#06131a] hover:brightness-110 transition"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="mt-24 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-text-dim)]">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.</span>
        <span className="mono">{profile.resumeNote}</span>
      </footer>
    </section>
  )
}
