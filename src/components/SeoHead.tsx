import { useEffect } from 'react'
import { siteConfig } from '../data/content'

export function SeoHead() {
  useEffect(() => {
    const siteUrl = siteConfig.siteUrl.replace(/\/$/, '')

    if (siteUrl) {
      const ogImage = `${siteUrl}/images/logo.png`
      setMeta('property', 'og:url', `${siteUrl}/`)
      setMeta('property', 'og:image', ogImage)
      setMeta('name', 'twitter:card', 'summary_large_image')
      setMeta('name', 'twitter:image', ogImage)

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = `${siteUrl}${window.location.pathname}`
    }
  }, [])

  return null
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}
