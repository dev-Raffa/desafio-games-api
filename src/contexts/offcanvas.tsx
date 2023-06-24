'use client';

import { createContext, useState, ReactNode } from 'react';

type Props = { children: ReactNode };
type showProps = boolean;
interface offCanvasProps {
  show: showProps;
  toggleShow: () => void;
}

export const OffCanvasContext = createContext<offCanvasProps>(
  {} as offCanvasProps
);

export const OffCanvasProvider = ({ children }: Props) => {
  const [show, setShow] = useState<showProps>(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <OffCanvasContext.Provider value={{ show, toggleShow }}>
      {children}
    </OffCanvasContext.Provider>
  );
};
