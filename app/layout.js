
import './globals.css'
import localFont from '@next/font/local'

import { Footer, NavBar } from '@/components/layout'

const industry = localFont({
  src: [
    {
      path: '../public/fonts/IndustryTest-Book.otf',
      weight:'800'
    },
    {
      path: '../public/fonts/IndustryTest-Demi.otf',
      weight:'700'
    },
    {
      path: '../public/fonts/IndustryTest-Medium.otf',
      weight:'500'
    },
  ],
  variable: '--font-industry'
})

const yapari = localFont({
  src: [
    {
      path: '../public/fonts/Yapari-VF.ttf',
    },
  ],
  variable: '--font-yapari',
})

export const metadata = {
  title: 'WSA',
  description: 'White Snail America',
}

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
