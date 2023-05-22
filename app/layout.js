
import './globals.css'
import localFont from '@next/font/local'

import { Footer, NavBar } from '@/components/layout'

const yapari = localFont({
  src: [
    {
      path: '../public/fonts/Yapari-VF.ttf',
    },
  ],
  variable: '--font-yapari'
})


export const metadata = {
  title: 'WSA',
  description: 'White Snail America',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`font-sans`}>
      <body className={yapari.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
