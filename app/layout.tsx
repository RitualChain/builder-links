import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const baseURL = 'https://links.ritual.tools'

export const metadata: Metadata = {
  title: 'Ritual | Builder Links',
  description: 'Builder Links for builders on Ritual Chain',
  keywords: ['Ritual', 'links', 'builder', 'developer', 'blockchain'],
  authors: [{ name: 'Ritual Team' }],
  openGraph: {
    title: 'Ritual | Builder Links',
    description: 'Builder Links for builders on Ritual Chain',
    type: 'website',
    images: [
      {
        url: `${baseURL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon-180x180.png"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
