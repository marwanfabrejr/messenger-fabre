import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FABRE | Always stay in touch.',
  description:
    'Hang out anytime, anywhere. Fabre makes it easy and fun to stay close to your favorite people.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/logo.png' />
      </head>
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
