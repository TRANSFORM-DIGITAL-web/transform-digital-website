import { LegalPage } from './LegalPage'
import { privacySections } from '../data/legal'

export function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={privacySections} />
}
