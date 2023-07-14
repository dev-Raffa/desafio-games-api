'use client';

import { Button } from '@/components/buttons';
import { useAppDispatch } from '@/redux/hook';
import { useRouter } from 'next/navigation';

export const Logout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

 

  return (
    <Button.wrap onClick={() => { dispatch(Logout());
      router.refresh()}} bgcolor="transparent" border="none">
      <Button.text color="primary" size="m" textdecoration="underline">
        sair
      </Button.text>
    </Button.wrap>
  );
};
