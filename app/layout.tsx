/* eslint-disable */


import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'


const textSize = Poppins({ subsets: ['latin'], weight:[
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={textSize.className}>{children}</body>
    </html>
  )
}
