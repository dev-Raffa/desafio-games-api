import { Button } from '@/components/buttons';

export const Login = () => {
  return (
    <Button.wrap bgcolor="transparent" border="none">
      <Button.link href="/auth" color="primary" decoration="underline" size="m">
        login
      </Button.link>
    </Button.wrap>
  );
};
