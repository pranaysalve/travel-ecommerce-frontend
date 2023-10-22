import type { Metadata } from 'next'

import './globals.css'

import { Footer, Navbar } from '@/components'
import { TourContextProvider } from '@/service/tour/tour.context'
import { CartContextProvider } from '@/service/cart/cart.context'
export const metadata: Metadata = {
  title: '----',
  description: 'which car you like?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <TourContextProvider>
          <CartContextProvider>
            <Navbar />
            {children}
            <Footer />
          </CartContextProvider>
        </TourContextProvider>
      </body>
    </html>
  )
}
