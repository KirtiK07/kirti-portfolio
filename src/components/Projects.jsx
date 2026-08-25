import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="mono text-sm text-[var(--color-accent)] mb-2">Featured work</p>
          <h2 className="text-3xl font-bold text-[var(--color-text)]">
            Five projects, each with a real number attached.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: 'easeOut' }}
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  {p.tag}
                </span>
                <span className="mono text-xs text-[var(--color-text-dim)]">{p.repoName}</span>
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">{p.name}</h3>
              <p className="text-sm text-[var(--color-text-dim)] mb-4">{p.description}</p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-[var(--color-surface-2)] px-2 py-2.5 text-center">
                    <div className="text-sm font-bold text-[var(--color-accent-2)]">{m.value}</div>
                    <div className="mt-0.5 text-[10px] leading-tight text-[var(--color-text-dim)]">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] text-[var(--color-text-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 text-sm">
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)] hover:brightness-110"
                  >
                    Live demo →
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[var(--color-text-dim)]/60">
                    Demo coming soon
                  </span>
                )}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
                >
                  Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
