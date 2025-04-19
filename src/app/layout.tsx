import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { type Metadata } from 'next'
import { Geist } from 'next/font/google'

import { TRPCReactProvider } from '@/trpc/react'

export const metadata: Metadata = {
  title: 'Trainer',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${geist.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
