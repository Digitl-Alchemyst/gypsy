import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GypsyGPT',
  description: 'Growth Performance Tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>

        <div className='flex'>

          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] lg:min-w-[22rem]'>
            <SideBar />
          </div>

          {/* Client Working Notification */}

          <div className='bg-[#343541] flex-1'> 
            {children}
          </div>

        </div>

      </body>
    </html>
  )
}
