import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
// import { Inter, Montserrat, Geist } from "next/font/google";
import { GeistSans } from 'geist/font/sans'

import Header from '@/components/header'
import AppProvider from '@/providers'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aiden-portfolio.site/'),
  title: 'Aiden Dang | Portfolio',
  description:
    'Explore my creative journey, skills, and accomplishments! Here, you’ll find highlights of my work, passion projects, and the expertise I bring to every opportunity.',
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
