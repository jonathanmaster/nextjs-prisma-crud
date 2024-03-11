import { Raleway } from 'next/font/google'
import './globals.css'
import Nabvar from './components/Nabvar'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Crud Prisma-NextJs',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nabvar />
        {children}
      </body>
    </html>
  )
}