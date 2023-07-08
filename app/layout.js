'use client'
import '../styles/globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const GelionMedium = localFont({
  src: '../styles/fonts/Gelion_Medium.ttf',
  display: 'swap',
})
const GelionRegular = localFont({
  src: '../styles/fonts/Gelion_Regular.ttf',
  display: 'swap',
})
const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Learning App',
  description: 'Find the Course you want to learn',
}

export default function RootLayout({ children }) {
  const pathname = usePathname()
  let isHome = false
  if (pathname == '/') isHome = true
  return (
    <html lang="en">


      <body className={`bg-gray-100 ${inter.className}`}>
        <div className='flex flex-row'>
          {!isHome && <Nav />}
          {children}

        </div>

      </body>

    </html >
  )
}
