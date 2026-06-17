export interface ContactFormPayload {
  name: string
  email: string
  phone: string
  business: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  emailSent: boolean
  whatsappSent: boolean
}

function getEnv(key: string): string {
  return (import.meta.env[key] as string | undefined)?.trim() || ''
}

function buildWhatsAppMessage(data: ContactFormPayload): string {
  return [
    'New Contact Form - Transform Digital',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Business: ${data.business || 'Not provided'}`,
    '',
    'Project Details:',
    data.message,
  ].join('\n')
}

async function sendWhatsAppViaCallMeBot(
  message: string,
  phone: string,
  apiKey: string
): Promise<boolean> {
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`

  try {
    const response = await fetch(url)
    const text = await response.text()
    if (text.toLowerCase().includes('error') || text.toLowerCase().includes('invalid')) {
      return false
    }
    return true
  } catch {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = url
      setTimeout(() => resolve(true), 3000)
    })
  }
}

function isValidCallMeBotKey(key: string): boolean {
  if (!key || key.length < 8) return false
  const invalid = ['paste_your', 'your_', 'your-', 'example', 'placeholder', 'xxx']
  return !invalid.some((term) => key.toLowerCase().includes(term))
}

async function parseJsonSafe(response: Response): Promise<Record<string, unknown>> {
  const text = await response.text()
  try {
    return JSON.parse(text) as Record<string, unknown>
  } catch {
    throw new Error(
      'Could not reach email service. Please try again or contact us on WhatsApp.'
    )
  }
}

export async function sendContactForm(
  data: ContactFormPayload
): Promise<ContactFormResponse> {
  const web3formsKey = getEnv('VITE_WEB3FORMS_ACCESS_KEY')
  const callmebotKey = getEnv('VITE_CALLMEBOT_API_KEY')
  const whatsappPhone = getEnv('VITE_OWNER_WHATSAPP_PHONE') || '919702839072'

  if (!web3formsKey || web3formsKey.includes('your_')) {
    throw new Error(
      'Email service is not configured. Please contact us directly on WhatsApp.'
    )
  }

  const emailRes = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: web3formsKey,
      subject: `New Lead: ${data.name} — Transform Digital`,
      from_name: 'Transform Digital Website',
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      business: data.business || 'Not provided',
      message: data.message,
      botcheck: '',
    }),
  })

  const emailResult = await parseJsonSafe(emailRes)

  if (!emailResult.success) {
    throw new Error(
      (emailResult.message as string) || 'Failed to send email. Please try WhatsApp instead.'
    )
  }

  let whatsappSent = false

  if (isValidCallMeBotKey(callmebotKey)) {
    whatsappSent = await sendWhatsAppViaCallMeBot(
      buildWhatsAppMessage(data),
      whatsappPhone,
      callmebotKey
    )
  }

  return { success: true, emailSent: true, whatsappSent }
}
