'use client';

import { Button } from '@/components/buttons';
import { MouseEventHandler } from 'react';
import { IoClose } from 'react-icons/io5';

export const ButtonClearFilter = ({
  handleClick
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button.wrap
      onClick={handleClick}
      width="1rem"
      height="1rem"
      alignx="center"
      aligny="center"
      margin="0 0 0 -1.2rem"
      border="none"
    >
      <Button.icon icon={<IoClose />} color="red"></Button.icon>
    </Button.wrap>
  );
};
