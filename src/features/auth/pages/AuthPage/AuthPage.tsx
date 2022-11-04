import { Button } from '@mantine/core';
import { FC, useCallback } from 'react';
import { AuthService } from '../../../../services/auth';

export const AuthPage: FC = () => {
  const handleSignIn = useCallback(async() => {
    await AuthService.signIn();
  }, []);

  return (
    <Button
      variant="light"
      color="gray"
      onClick={handleSignIn}
    >
      Войти через что-то
    </Button>
  );
};
