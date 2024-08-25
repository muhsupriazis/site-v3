import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cn } from '@/lib/utils'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Social } from './components/social-menu'
import { ThemeProvider } from './components/theme-provider'
import { DrawerMenu } from './components/drawer-menu'
import { Xicon } from './components/icon/x'
import { doge } from './components/doge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Muhammad Supri',
    template: '%s | Muhammad Supri',
  },
  description: 'website to write about my thoughts and experiences',
  openGraph: {
    title: 'Muhammad Supri',
    description: 'website to write about my thoughts and experiences',
    url: baseUrl,
    siteName: 'muhsupriazis',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  doge();
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${doge.toString()})();`,
          }}
        />
      </head>
      <body className={cn(
        inter.className
      )}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
        <header className='flex items-center justify-between p-4'>
          <div className='block md:hidden'>
            <DrawerMenu />
          </div>
          <div className='hidden md:block'>
            <Xicon />
          </div>
          <div className='hidden md:block'>
            <Navbar />
          </div>
          <div>
            <Social />
          </div>
        </header>
        <main className='px-7 md:max-w-3xl mx-auto py-3'>
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        {/* <BackgroundBeams /> */}
      </ThemeProvider>
      </body>
    </html>
  )
}
