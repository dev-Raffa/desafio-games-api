'use client';

import { useUserContext } from '@/app/contexts/user/context';
import { Button } from '@/components/buttons';
import { useRouter } from 'next/navigation';

export const Logout = () => {
  const { setUser } = useUserContext();
  const router = useRouter();

  function logout() {
    setUser(null);
    router.refresh();
  }

  return (
    <Button.wrap onClick={logout} bgcolor="transparent" border="none">
      <Button.text color="primary" size="m" textdecoration="underline">
        sair
      </Button.text>
    </Button.wrap>
  );
};
