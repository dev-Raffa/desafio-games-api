'use client';

import { Button } from '@/components/buttons';
import { FiSun } from 'react-icons/fi';
import * as styles from '../styles';
import { useAppDispatch } from '@/redux/hook';
import { toggle } from '@/redux/slices/theme';

export const ButtonGoToTheThemeLight = () => {
  const dispatch = useAppDispatch();

  return (
    <Button.wrap
      onClick={() => dispatch(toggle())}
      aria-label="mudar para o tema light"
      {...styles.ButtonSun}
    >
      <FiSun />
    </Button.wrap>
  );
};
