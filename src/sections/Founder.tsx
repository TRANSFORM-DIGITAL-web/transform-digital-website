import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { GitHubIcon } from '../components/ui/GitHubIcon'
import { founder, siteConfig } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const floatingLabels = [
  { text: 'Founder & Developer', position: 'top-8 -right-4 md:right-8', delay: 0 },
  { text: 'MCA Student', position: 'bottom-16 -left-4 md:left-4', delay: 0.3 },
  { text: 'Web Developer', position: 'bottom-4 right-4 md:right-12', delay: 0.6 },
]

export function Founder() {
  const whatsappMsg = encodeURIComponent("Hi Pawan, I'd like to connect about a project.")

  return (
    <section id="founder" className="relative py-24 md:py-32 overflow-hidden" aria-labelledby="founder-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="section-padding container-wide relative">
        <MotionReveal>
          <SectionHeading label="Founder" title="Meet The Founder" align="center" />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <MotionReveal direction="left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-strong">
                <img
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role}`}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              </div>

              {floatingLabels.map((label) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: label.delay, duration: 0.5 }}
                  animate={{ y: [0, -6, 0] }}
                  className={`absolute ${label.position} glass rounded-full px-4 py-2 text-xs font-medium text-text whitespace-nowrap`}
                >
                  {label.text}
                </motion.div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal direction="right" delay={0.15}>
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-text">
                  {founder.name}
                </h3>
                <p className="mt-1 text-accent font-medium">{founder.role}</p>
              </div>

              <div className="mt-8 space-y-4 text-text-muted leading-relaxed font-light">
                {founder.story.map((paragraph, i) => (
                  <p key={i}>
                    {i === 2 ? (
                      <>
                        {paragraph}{' '}
                        <span className="text-text font-medium">
                          {founder.missionHighlight}
                        </span>
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm hover:border-accent/30 transition-all"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  Email
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm hover:border-accent/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm hover:border-accent/30 transition-all"
                >
                  <GitHubIcon className="w-4 h-4 text-accent" />
                  GitHub
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
