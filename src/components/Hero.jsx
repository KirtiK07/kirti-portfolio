import { motion } from 'framer-motion'
import { profile, now } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-accent), transparent)' }}
      />
      <div className="max-w-5xl mx-auto relative">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mono text-sm text-[var(--color-accent)] mb-4"
        >
          Hi, I&apos;m Kirti — {profile.location}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--color-text)] max-w-3xl leading-[1.08]"
        >
          AI/ML Engineer building systems that actually ship.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-lg text-[var(--color-text-dim)] max-w-2xl"
        >
          {profile.tagline} Every project below ships with a benchmark, not just a demo.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-[#06131a] hover:brightness-110 transition"
          >
            See the work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-14 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5"
        >
          <p className="mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-3">
            Now
          </p>
          <ul className="space-y-2">
            {now.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-[var(--color-text)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[var(--color-text-dim)]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
