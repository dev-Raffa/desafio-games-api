'use client';

import { Button } from '@/components/buttons';
import { FiSun } from 'react-icons/fi';
import * as styles from '../styles';
import { useAppDispatch } from '@/redux/hook';
import { toggle } from '@/redux/models/theme';
import lightTheme from '@/app/style/themes/light';

export const ButtonGoToTheThemeLight = () => {
  const dispatch = useAppDispatch();

  return (
    <Button.wrap
      onClick={() => dispatch(toggle(lightTheme))}
      aria-label="mudar para o tema light"
      {...styles.ButtonSun}
    >
      <FiSun />
    </Button.wrap>
  );
};
