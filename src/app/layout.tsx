import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ипотечный брокер Ангелина Крукович — Москва и МО',
  description:
    'Помощь в получении ипотеки под лучшие условия. Бесплатные консультации, подбор банков, сопровождение сделки. Москва и Московская область.',
  keywords: [
    'ипотека',
    'ипотечный брокер',
    'Ангелина Крукович',
    'Москва',
    'ипотека Москва',
    'подбор ипотеки',
    'бесплатная консультация',
    'сопровождение ипотеки',
    'выгодная ипотека',
    'ипотека без отказа',
    'ипотека для ИП',
    'ипотека с господдержкой'
  ],
  openGraph: {
    title: 'Ипотечный брокер Ангелина Крукович — Москва и МО',
    description:
      'Экспертная помощь в получении ипотеки. Подбор банков, сопровождение, лучшие условия. Бесплатно для клиента.',
    url: 'https://ipoteka-broker.ru',
    siteName: 'Ипотечный брокер Ангелина Крукович',
    images: [
      {
        url: 'https://img.freepik.com/premium-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-businesswoman-real-estate-broker-showing-clients-good-deal-carry-laptop-hand_1258-59119.jpg',
        width: 800,
        height: 600,
        alt: 'Ипотечный брокер Ангелина Крукович'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  },
  authors: [{ name: 'Ангелина Крукович', url: 'https://mortgage-broker-murex.vercel.app/' }],
  creator: 'Ангелина Крукович',
  publisher: 'Ангелина Крукович',
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen='true'>
        {children}
      </body>
    </html>
  )
}
