import { MainFlex } from '@/components/containers/main';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <MainFlex
      width="100%"
      padding="0 10%"
      minheight="75vh"
      alignx="center"
      aligny="center"
      direction="column"
      gap="3rem"
    >
      {children}
    </MainFlex>
  );
};
