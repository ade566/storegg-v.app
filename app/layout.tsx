/* eslint-disable @next/next/no-page-custom-font */

import { Inter } from 'next/font/google'
import Script from 'next/script'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/utilities.css'
import '../styles/homepage.css'
import '../styles/detail.css'
import '../styles/checkout.css'
import '../styles/complete-checkout.css'
import '../styles/sign-in.css'
import '../styles/sign-up.css'
import '../styles/sign-up-photo.css'
import '../styles/sign-up-success.css'
import '../styles/404-not-found.css'
import '../styles/sidebar.css'
import '../styles/overview.css'
import '../styles/transactions.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store GG',
  description: 'Top Up Game best way in Store GG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* google font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />

        {/* AOS Animation */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      
      </head>
      <body className={inter.className}>
        {children}

        {/* <Bootstrap */}
        <Script id="bootstrap-js" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous">
        </Script>
      </body>
    </html>
  )
}
