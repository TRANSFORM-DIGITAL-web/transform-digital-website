import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../components/ui/GitHubIcon'
import { featuredProjects } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover object-top min-h-[280px] transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
      onError={() => setImgSrc('/images/logo.png')}
    />
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32" aria-labelledby="projects-heading">
      <div className="section-padding container-wide">
        <MotionReveal>
          <SectionHeading label="Portfolio" title="Featured Work" align="center" />
        </MotionReveal>

        <div className="space-y-12 max-w-6xl mx-auto">
          {featuredProjects.map((project, i) => (
            <MotionReveal key={project.id} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group glass-strong rounded-3xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <ProjectImage src={project.image} alt={`${project.title} preview`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-bg/40" />
                  </div>

                  <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full glass text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-text">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-text-muted leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg text-sm font-semibold hover:shadow-[0_0_30px_rgba(0,114,255,0.3)] transition-all"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium hover:border-accent/30 transition-all"
                      >
                        View Code
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
