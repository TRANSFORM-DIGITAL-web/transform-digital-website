import { Clock } from 'lucide-react'
import { comingSoonProjects } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function ComingSoon() {
  return (
    <section id="coming-soon" className="relative py-24 md:py-32 bg-bg-elevated" aria-labelledby="coming-soon-heading">
      <div className="section-padding container-wide">
        <MotionReveal>
          <SectionHeading
            label="In Development"
            title="Coming Soon"
            subtitle="Future projects we're actively building — shown transparently, not as finished work."
            align="center"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comingSoonProjects.map((project, i) => (
            <MotionReveal key={project.id} delay={i * 0.12}>
              <article className="relative glass rounded-3xl p-8 md:p-10 h-full border-dashed border-border overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-medium text-accent tracking-wide uppercase">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-text">
                  {project.title}
                </h3>

                <p className="mt-4 text-text-muted leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-8 h-px bg-gradient-to-r from-border via-accent/30 to-border" />
                <p className="mt-4 text-text-subtle text-xs tracking-wide">
                  Currently in active development
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
