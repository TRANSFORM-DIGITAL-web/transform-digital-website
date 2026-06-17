import { processSteps } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-bg-elevated overflow-hidden" aria-labelledby="process-heading">
      <div className="section-padding container-wide">
        <MotionReveal>
          <SectionHeading label="Process" title="How We Work" align="center" />
        </MotionReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <MotionReveal key={step.step} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block md:w-1/2" />

                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-2 ring-4 ring-bg-elevated" />

                  <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <span className="text-accent text-sm font-medium tracking-widest">
                      STEP {step.step}
                    </span>
                    <h3 className="mt-2 font-display text-xl md:text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-muted text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
