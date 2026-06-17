import { type ReactNode } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SeoHead } from './components/SeoHead'
import { HomePage } from './pages/HomePage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/terms-and-conditions"
          element={
            <LegalLayout>
              <TermsPage />
            </LegalLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <LegalLayout>
              <PrivacyPage />
            </LegalLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
