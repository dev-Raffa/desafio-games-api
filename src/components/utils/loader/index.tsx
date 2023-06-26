import { ReactElement } from 'react';
import { LoaderStyle } from './style';

type loaderProps = {
  icon: ReactElement;
};
export const Loader = ({ icon }: loaderProps) => {
  return <LoaderStyle>{icon}</LoaderStyle>;
};
