import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Logo } from '../components/ui/Logo'

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-elevated" aria-labelledby="about-heading">
      <div className="section-padding container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <MotionReveal>
            <SectionHeading
              label="About"
              title="Built With Passion For Digital Innovation"
              align="center"
            />
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <div className="space-y-6 text-text-muted text-base md:text-lg leading-relaxed font-light">
              <p>
                Transform Digital was founded to help businesses establish a stronger
                digital presence through modern websites and digital solutions.
              </p>
              <p>
                The goal is simple: create high-quality digital experiences that help
                businesses stand out online and build trust with their audience.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <div className="mt-12 glass-strong rounded-3xl p-10 md:p-14 flex flex-col items-center">
              <Logo variant="footer" className="mb-8" />
              <p className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
                Our Mission
              </p>
              <p className="font-display text-2xl md:text-4xl font-bold text-gradient leading-tight">
                Transform Businesses Into Digital Leaders
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
