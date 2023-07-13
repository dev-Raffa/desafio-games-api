import { Poppins } from 'next/font/google';
import StyledComponentsRegistry from '@/style/style-components/registry';
import GlobalStyle from './style/global';
import { Providers } from './contexts/providers';

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
          <Providers>
            <GlobalStyle />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
