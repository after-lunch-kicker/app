import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../../providers/AuthProvider';

export const AuthGuard: FC = () => {
  const { user } = useAuthContext();

  if (user != null) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
