import { ReactNode, Suspense } from 'react';
import { Header } from './components/layout/header';
import { Main } from './components/layout/main';
import { Footer } from './components/layout/footer';
import { Loading } from './components/utils/loader';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './error';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<Error />}>{children}</ErrorBoundary>
        </Suspense>
      </Main>
      <Footer />
    </>
  );
}
