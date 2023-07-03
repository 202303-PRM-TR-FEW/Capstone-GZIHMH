import '../styles/globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
const GelionMedium = localFont({
  src: '../styles/fonts/Gelion_Medium.ttf',
  display: 'swap',
})
const GelionRegular = localFont({
  src: '../styles/fonts/Gelion_Regular.ttf',
  display: 'swap',
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning App',
  description: 'Find the Course you want to learn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
