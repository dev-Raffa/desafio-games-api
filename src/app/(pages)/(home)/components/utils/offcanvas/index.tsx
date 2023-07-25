'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { OffCanvas } from '@/components/ofcanvas';
import { Text } from '@/components/typography/texts';
import { Button } from '@/components/buttons';
import { GrFormClose } from 'react-icons/gr';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';
import * as styles from './style';

export const AlertLoging = () => {
  const isShow = useAppSelector((state) => state.offCanvas.isShow);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(setIsShowOffCanvas());
  }
  return (
    <OffCanvas.wrap show={isShow}>
      <OffCanvas.card.wrap {...styles.cardWrap}>
        <OffCanvas.card.header {...styles.cardHeader}>
          <Button.wrap onClick={handleClick} {...styles.cardButtonWrap}>
            <Button.icon
              icon={<GrFormClose fill="currentColor" />}
              {...styles.cardButtonIcon}
            />
          </Button.wrap>
        </OffCanvas.card.header>
        <Text {...styles.cardTitle}>
          Faça login e aproveite toda a nossa plataforma!
        </Text>
        <OffCanvas.card.footer {...styles.cardFooter}>
          <Button.wrap onClick={handleClick} {...styles.cardFooterButtonWrap}>
            <Button.link href="/auth" {...styles.cardFooterButonLink}>
              Login
            </Button.link>
          </Button.wrap>
        </OffCanvas.card.footer>
      </OffCanvas.card.wrap>
    </OffCanvas.wrap>
  );
};
