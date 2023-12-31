import { Poppins } from 'next/font/google';
import StyledComponentsRegistry from '@/style/style-components/registry';
import { Providers } from '@/redux';
import { ThemeContextProvider } from './style';

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
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
