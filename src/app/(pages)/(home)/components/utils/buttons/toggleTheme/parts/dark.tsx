'use client';

import { Button } from '@/components/buttons/index';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import * as styles from '../styles';
import { useAppDispatch } from '@/redux/hook';
import { toggle } from '@/redux/models/theme';
import darkTheme from '@/app/style/themes/dark';

export const ButtonGoToTheThemeDark = () => {
  const dispatch = useAppDispatch();

  return (
    <Button.wrap
      onClick={() => dispatch(toggle(darkTheme))}
      aria-label="mudar para o thema dakr"
      {...styles.ButtonsMoon}
    >
      <BsFillMoonStarsFill />
    </Button.wrap>
  );
};
