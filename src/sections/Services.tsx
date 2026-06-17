import { services } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceIcon } from '../components/ui/ServiceIcon'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-bg-elevated" aria-labelledby="services-heading">
      <div className="section-padding container-wide">
        <MotionReveal>
          <SectionHeading
            label="Services"
            title="Digital Solutions Built For Growth"
            align="center"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <MotionReveal key={service.id} delay={i * 0.1}>
              <article className="group glass rounded-3xl p-8 md:p-10 h-full transition-all duration-500 hover:border-accent/20 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-bold text-text group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-text-muted text-sm md:text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
