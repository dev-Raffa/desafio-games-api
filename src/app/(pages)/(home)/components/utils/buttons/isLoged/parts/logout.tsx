'use client';

import { Button } from '@/components/buttons';
import { useAppDispatch } from '@/redux/hook';
import { logout } from '@/redux/models/user';
import { useRouter } from 'next/navigation';

export function Logout() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Button.wrap
      onClick={() => {
        dispatch(logout());
        router.refresh();
      }}
      bgcolor="transparent"
      border="none"
    >
      <Button.text color="primary" size="m" textdecoration="underline">
        sair
      </Button.text>
    </Button.wrap>
  );
}
