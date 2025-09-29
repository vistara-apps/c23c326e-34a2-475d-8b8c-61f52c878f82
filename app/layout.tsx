import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduSpin - Spin for Knowledge, Earn for Real',
  description: 'A Base MiniApp that gamifies daily learning through spin-to-win quizzes and rewards.',
  keywords: ['education', 'learning', 'quiz', 'blockchain', 'base', 'miniapp'],
  authors: [{ name: 'EduSpin Team' }],
  openGraph: {
    title: 'EduSpin - Spin for Knowledge, Earn for Real',
    description: 'Gamified learning with real rewards on Base',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
