'use client'
import '../styles/globals.css'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import { AuthProvider } from '@/components/AuthProvider'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from '@/redux/store';
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
  {/*provider for redux and presistGate added*/}

      <body className={`bg-gray-100 ${inter.className}`}>
      <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <div className='flex flex-row'>
          {!isHome && <Nav />}
          {children}

        </div>
        </PersistGate>
        </Provider>
      </body>

    </html >
  )
}
