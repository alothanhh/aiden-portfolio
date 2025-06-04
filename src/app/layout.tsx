import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
// import { Inter, Montserrat, Geist } from "next/font/google";
import { GeistSans } from 'geist/font/sans'

import Header from '@/components/header'
import AppProvider from '@/providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Aiden Dang | Portfolio',
  description:
    'Explore my creative journey, skills, and accomplishments! Here, you’ll find highlights of my work, passion projects, and the expertise I bring to every opportunity.',
  openGraph: {
    images: [
      {
        url: 'https://www.aiden-portfolio.site/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Aiden Dang Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.aiden-portfolio.site/twitter-image.png',
        width: 600,
        height: 314,
        alt: 'Aiden Dang Portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='smooth-scroll'>
      <body className={GeistSans.className}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
