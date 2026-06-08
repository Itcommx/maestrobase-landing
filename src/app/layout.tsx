import type { Metadata } from 'next'
import { Lexend, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MaestroBase — Tu escuela, en tu mano',
  description: 'Gestión escolar diseñada para maestros. Rápida, clara y siempre contigo.',
  openGraph: {
    title: 'MaestroBase — Tu escuela, en tu mano',
    description: 'Gestión escolar diseñada para maestros. Rápida, clara y siempre contigo.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${lexend.variable} ${sourceSans.variable} font-body bg-white`}>
        {children}
      </body>
    </html>
  )
}
