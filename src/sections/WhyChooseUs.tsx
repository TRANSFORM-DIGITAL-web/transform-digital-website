import { whyChooseUs } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceIcon } from '../components/ui/ServiceIcon'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32" aria-labelledby="why-us-heading">
      <div className="section-padding container-wide">
        <MotionReveal>
          <SectionHeading
            title="Why Businesses Choose Transform Digital"
            align="center"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {whyChooseUs.map((item, i) => (
            <MotionReveal key={item.title} delay={i * 0.08}>
              <div className="group glass rounded-3xl p-7 text-center h-full transition-all duration-500 hover:border-accent/20 hover:-translate-y-1">
                <div className="w-11 h-11 mx-auto rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <ServiceIcon name={item.icon} className="w-5 h-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-text-muted text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
