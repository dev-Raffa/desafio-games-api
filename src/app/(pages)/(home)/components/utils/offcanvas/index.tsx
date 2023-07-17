'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { OffCanvas } from '@/components/ofcanvas';
import { Text } from '@/components/typography/texts';
import { Button } from '@/components/buttons';
import { GrFormClose } from 'react-icons/gr';
import { setIsShowOffCanvas } from '@/redux/models/offCanvas/slice';

export const AlertLoging = () => {
  const isShow = useAppSelector((state) => state.offCanvas.isShow);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(setIsShowOffCanvas());
  }
  return (
    <OffCanvas.wrap show={isShow}>
      <OffCanvas.card.wrap
        position="relative"
        width="25rem"
        height="15rem"
        bgcolor="#ebeaea"
        alignx="center"
        aligny="center"
        direction="column"
        padding="1.5rem"
        border-radius="5px"
        box-shadow="0px 0px 12px 10px"
        border="1px solid black"
        overflow="hidden"
      >
        <OffCanvas.card.header
          alignx="right"
          aligny="center"
          width="100%"
          position="absolute"
          top="0"
          padding="0.5rem 1rem"
        >
          <Button.wrap
            onClick={handleClick}
            bgcolor="transparent"
            border="none"
            height="2rem"
            width="2rem"
          >
            <Button.icon
              icon={<GrFormClose fill="currentColor" />}
              color="red"
              height="2rem"
              width="2rem"
            />
          </Button.wrap>
        </OffCanvas.card.header>
        <Text color="primary" size="m" align="center">
          Faça login e aproveite toda a nossa plataforma!
        </Text>
        <OffCanvas.card.footer
          width="100%"
          position="absolute"
          alignx="right"
          bottom="0"
          padding="0.5rem 1rem"
        >
          <Button.wrap
            onClick={handleClick}
            bgcolor="transparent"
            border="none"
          >
            <Button.link href="/auth" color="primary" size="m">
              Login
            </Button.link>
          </Button.wrap>
        </OffCanvas.card.footer>
      </OffCanvas.card.wrap>
    </OffCanvas.wrap>
  );
};
