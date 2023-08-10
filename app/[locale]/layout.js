import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { NextIntlClientProvider, useMessages, useLocale } from 'next-intl'
import {notFound} from 'next/navigation';
import AuthLayout from "@/components/AuthLayout"
const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Course Worm',
  description: 'Find the Course you want to learn',
}

export default function RootLayout({ children,params }) {

  const locale = useLocale()
  const messages = useMessages()


    if (params.locale !== locale) {
        notFound();
    }

  return (
    <html lang={locale}>
      {/* <head>
        <link rel="icon" href="/assets/icons/coursewormlogo.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head> */}

      <body className={`bg-gray-100 ${inter.className}`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <AuthLayout>
            {children}
        </AuthLayout>
    </NextIntlClientProvider>
      </body>

    </html >
  )
}
