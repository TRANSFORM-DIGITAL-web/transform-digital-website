import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/content'

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hi Transform Digital, I'd like to discuss a project."
  )

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" strokeWidth={0} />
    </motion.a>
  )
}
