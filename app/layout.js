
import './globals.css'

import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

import localFont from '@next/font/local'

/* --- Normal Typography, Main Body, Paragraph Font Face --- */
const industry = localFont({
  src: [
    {
      path: '../public/fonts/IndustryTest-Book.otf',
      weight: '800'
    },
    {
      path: '../public/fonts/IndustryTest-Demi.otf',
      weight: '700'
    },
    {
      path: '../public/fonts/IndustryTest-Medium.otf',
      weight: '500'
    },
  ],
  variable: '--font-industry'
})

/* --- Big Typography, Main Titles Font Face --- */
const yapari = localFont({
  src: [
    {
      path: '../public/fonts/Yapari-VF.ttf',
    },
  ],
  variable: '--font-yapari',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={yapari.className + " " + industry.variable + "relative"}>
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
