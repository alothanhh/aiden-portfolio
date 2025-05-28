import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
// import { Inter, Montserrat, Geist } from "next/font/google";
import { GeistSans } from 'geist/font/sans'

import AppProvider from '@/providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Aiden Dang | Portfolio',
  description: "Aiden's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='smooth-scroll'>
      <body className={GeistSans.className}>
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
