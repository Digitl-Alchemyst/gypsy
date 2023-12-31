import './globals.css';
import SideBar from '@/components/Sidebar';
import { SessionProvider } from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GypsyGPT',
  description: 'Growth Performance Tool',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
      <SessionProvider session={session}>
        {!session ? (
          <Login />
        ) : (
        <div className='flex'>

          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] lg:min-w-[22rem]'>
            <SideBar />
          </div>

          {/* Client Working Notification */}

          <div className='bg-[#343541] flex-1'> 
            {children}
          </div>

        </div>
        )}
      </SessionProvider>
      </body>
    </html>
  )
}
