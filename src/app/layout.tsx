import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import ActiveSectionContextProvider from '@/context/activeSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer/footer'
import ThemeSwitch from '@/components/themeSwitch/themeSwitch'
import ThemeContextProvider from '@/context/themeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicolas Ostermann | Mobile Software Developer',

  description:
    'Portfolio of Nicolas Ostermann — Mobile Software Developer from Stuttgart specialized in React Native, TypeScript, Swift and developer tooling.',

  keywords: [
    'Nicolas Ostermann',
    'Mobile Software Developer',
    'React Native',
    'TypeScript',
    'Swift',
    'SwiftUI',
    'Next.js',
    'Software Engineer',
    'Portfolio',
    'Stuttgart',
    'Germany',
  ],

  authors: [{ name: 'Nicolas Ostermann' }],

  creator: 'Nicolas Ostermann',

  applicationName: 'Nicolas Ostermann Portfolio',

  category: 'technology',

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL('https://portfolio-weld-one-68.vercel.app'),

  openGraph: {
    title: 'Nicolas Ostermann | Mobile Software Developer',

    description:
      'Mobile Software Developer specialized in React Native, Swift, TypeScript and developer tooling.',

    url: 'https://portfolio-weld-one-68.vercel.app',

    siteName: 'Nicolas Ostermann Portfolio',

    locale: 'en_US',

    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
