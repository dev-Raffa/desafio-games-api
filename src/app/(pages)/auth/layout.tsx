import { ConteinerFlex } from '@/components/containers';
import { ReactNode } from 'react';
import { Footer } from '../(home)/components/layout/footer';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ConteinerFlex
        as="main"
        height="calc(100vh - 5rem)"
        width="100%"
        alignx="center"
        aligny="center"
      >
        {children}
      </ConteinerFlex>
      <Footer />
    </>
  );
}
