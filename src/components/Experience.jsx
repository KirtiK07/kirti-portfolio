import { motion } from 'framer-motion'
import { experience, skills } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mono text-sm text-[var(--color-accent)] mb-2">Experience</p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-10">Four internships, one straight line to AI/ML.</h2>

          <ol className="relative border-l border-[var(--color-border)] pl-8 space-y-10">
            {experience.map((e, i) => (
              <motion.li
                key={e.org}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {e.role} <span className="text-[var(--color-text-dim)] font-normal">· {e.org}</span>
                  </h3>
                  <span className="mono text-xs text-[var(--color-text-dim)]">{e.period}</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="text-sm text-[var(--color-text-dim)] leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>

        <div id="skills">
          <p className="mono text-sm text-[var(--color-accent)] mb-2">Skills</p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-10">What I build with.</h2>
          <div className="space-y-7">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-3">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
