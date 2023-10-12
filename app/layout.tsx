import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '../lib/AntdRegistry';
import { getServerSession } from "next-auth/next"

import './globals.css';
import DashboardLayout from '@compositions/DashboardLayout';
import LoginForm from '@compositions/LoginForm';
import SessionProvider from '@lib/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <SessionProvider {...{ session }}>
            {session ?
              <DashboardLayout>
                {children}
              </DashboardLayout>
              : <LoginForm />
            }
          </SessionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
};

export default RootLayout;