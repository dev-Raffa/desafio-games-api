'us client';

import { Button } from '@/components/buttons/index';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import * as styles from '../styles';
import { useThemeContext } from '@/app/contexts/theme/context';

export const ButtonGoToTheThemeDark = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <Button.wrap
      onClick={toggleTheme}
      aria-label="mudar para o thema dakr"
      {...styles.ButtonsMoon}
    >
      <BsFillMoonStarsFill />
    </Button.wrap>
  );
};
