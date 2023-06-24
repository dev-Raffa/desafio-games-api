import { Poppins } from 'next/font/google';
import { ThemeProv } from '@/contexts/theme';
import StyledComponentsRegistry from '@/style/style-components/registry';
import GlobalStyle from '../style/global';
import { Header, Main, Footer } from './components/layout/export';

const fontFamily = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700']
});

export const metadata = {
  title: 'vou te contar',
  description:
    'fique por dentro dos ultimos acontecimentos sobre a vida dos famosos'
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
            <Header />
            <Main>{children}</Main>
            <Footer />
          </ThemeProv>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
