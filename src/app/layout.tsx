import { Poppins } from 'next/font/google';
import { ThemeProv } from '@/contexts/theme';
import StyledComponentsRegistry from '@/style/style-components/registry';
import GlobalStyle from './style/global';
import { Header, Main, Footer } from '@/app/components/layout/export';
import { GamesProvider } from '@/contexts/gameInformations';

const fontFamily = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700']
});

export const metadata = {
  title: 'Desafio - Processo seletivo'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={fontFamily.className}>
        <StyledComponentsRegistry>
          <ThemeProv>
            <GlobalStyle />
            <GamesProvider>
              <Header />
              <Main>{children}</Main>
              <Footer />
            </GamesProvider>
          </ThemeProv>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
