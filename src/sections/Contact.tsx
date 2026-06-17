import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, Check, Loader2, AlertCircle } from 'lucide-react'
import { siteConfig } from '../data/content'
import { MotionReveal } from '../components/ui/MotionReveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { sendContactForm } from '../lib/submitContactForm'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  })

  const whatsappMsg = encodeURIComponent(
    "Hi Transform Digital, I'd like to discuss my project."
  )

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      setError('Please agree to the Terms & Conditions and Privacy Policy to continue.')
      return
    }
    setError('')
    setLoading(true)

    try {
      await sendContactForm(form)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-border rounded-xl px-5 py-4 text-text text-sm placeholder:text-text-subtle focus:outline-none focus:border-accent/50 focus:bg-white/[0.07] transition-all duration-300 disabled:opacity-50'

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-elevated" aria-labelledby="contact-heading">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[180px]" />
      </div>

      <div className="section-padding container-wide relative">
        <MotionReveal>
          <SectionHeading
            label="Contact"
            title="Let's Build Something Great"
            subtitle="Ready to transform your digital presence?"
            align="center"
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <MotionReveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-text-subtle uppercase tracking-wider">Email</div>
                  <div className="text-sm text-text group-hover:text-accent transition-colors mt-0.5">
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs text-text-subtle uppercase tracking-wider">WhatsApp</div>
                  <div className="text-sm text-text group-hover:text-accent transition-colors mt-0.5">
                    {siteConfig.phone}
                  </div>
                </div>
              </a>
            </div>
          </MotionReveal>

          <MotionReveal className="lg:col-span-3" delay={0.2}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-strong rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-text">Message Sent!</h3>
                <p className="mt-3 text-text-muted font-light">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 md:p-10 space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

                {error && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-wider uppercase text-text-subtle mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      required
                      disabled={loading}
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-wider uppercase text-text-subtle mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={loading}
                      className={inputClass}
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs tracking-wider uppercase text-text-subtle mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      disabled={loading}
                      className={inputClass}
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-xs tracking-wider uppercase text-text-subtle mb-2">
                      Business Name
                    </label>
                    <input
                      id="business"
                      disabled={loading}
                      className={inputClass}
                      placeholder="Your business"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-wider uppercase text-text-subtle mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    disabled={loading}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    disabled={loading}
                    className="mt-1 w-4 h-4 rounded border-border accent-accent cursor-pointer"
                    required
                  />
                  <span className="text-text-muted text-xs leading-relaxed">
                    I agree to the{' '}
                    <Link to="/terms-and-conditions" className="text-accent hover:underline">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="text-accent hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={loading || !agreed}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-bg text-sm font-semibold hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Let's Discuss Your Project
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-sm font-medium hover:border-accent/30 transition-all"
                  >
                    Contact on WhatsApp
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </a>
                </div>
              </form>
            )}
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
