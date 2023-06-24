'use client';

import { Button } from '../buttons/style';
import { Card } from '../cards';
import type { offCanvas } from './types';
import { cardHeader } from '../cards/types';
import { useOffCanvas } from '@/hooks/offCanvas';

export const OffCanvas = ({ keyid, buttonopen, card }: offCanvas) => {
  const { show, toggleShow } = useOffCanvas();
  const ButtonX = (
    <Button
      key={keyid}
      aria-label="fechar menu"
      onClick={toggleShow}
      {...buttonopen}
    >
      {card.buttonclose.icon}
    </Button>
  );

  const header: cardHeader = {
    alignx: 'right',
    content: ButtonX
  };
  return (
    <>
      <Button onClick={toggleShow} aria-label="abrir menu" {...buttonopen}>
        {buttonopen.icon}
      </Button>

      {show && (
        <Card
          keyid={keyid}
          position="fixed"
          zindex={1}
          header={header}
          {...card}
        ></Card>
      )}
    </>
  );
};
