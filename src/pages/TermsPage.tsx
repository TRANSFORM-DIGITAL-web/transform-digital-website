import { LegalPage } from './LegalPage'
import { termsSections } from '../data/legal'

export function TermsPage() {
  return <LegalPage title="Terms & Conditions" sections={termsSections} />
}
