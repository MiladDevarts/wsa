
import '../globals.css'

import localFont from '@next/font/local'

/* --- Big Typography, Main Titles Font Face --- */
export const yapari = localFont({
    src: [
        {
            path: '../../public/fonts/YapariThin.ttf',
            weight: '200',
        },
        {
            path: '../../public/fonts/Yapari-Light.ttf',
            weight: '300'
        },
        {
            path: '../../public/fonts/Yapari-Regular.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts/Yapari-Bold.ttf',
            weight: '700'
        },
    ],
    variable: '--font-yapari',
})

/* --- Normal Typography, Main Body, Paragraph Font Face --- */
export const industry = localFont({
    src: [
        {
            path: '../../public/fonts/IndustryTest-Book.otf',
            weight: '800',
        },
        {
            path: '../../public/fonts/IndustryTest-Demi.otf',
            weight: '700'
        },
        {
            path: '../../public/fonts/IndustryTest-Medium.otf',
            weight: '500'
        },
    ],
    variable: '--font-industry'
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${industry.variable} ${yapari.variable}`}>
            <body>
                {children}
            </body>
        </html>
    )
}
