import { ReactNode, Suspense } from 'react';
import { Header } from './components/layout/header';
import { Main } from './components/layout/main';
import { Footer } from './components/layout/footer';
import { Loading } from './components/utils/loader';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Main>
      <Footer />
    </>
  );
}
