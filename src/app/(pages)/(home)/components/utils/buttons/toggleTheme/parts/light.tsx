'use client';

import { Button } from '@/components/buttons';
import { FiSun } from 'react-icons/fi';
import * as styles from '../styles';
import { useThemeContext } from '@/app/contexts/theme/context';

export const ButtonGoToTheThemeLight = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <Button.wrap
      onClick={toggleTheme}
      aria-label="mudar para o tema light"
      {...styles.ButtonSun}
    >
      <FiSun />
    </Button.wrap>
  );
};
