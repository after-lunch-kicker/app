import { createContext, PropsWithChildren, useMemo, FC, useContext, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../services/supabase';
import { queryClient } from '../api';
import { USER_QUERY_KEY, useUserQuery } from '../queries';

interface AuthContext {

  /** User. */
  readonly user: User | null;
}

const defaultAuth: AuthContext = {
  user: null,
};

export const authContext = createContext<AuthContext>(defaultAuth);

/** Provides auth object. */
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: user, isLoading } = useUserQuery();

  useEffect(() => {
    const { unsubscribe } = SupabaseService.onUserChange(data => queryClient.setQueryData(USER_QUERY_KEY, data));

    return () => {
      unsubscribe();
    };
  }, []);

  const value: AuthContext = useMemo(() => ({
    user: user ?? null,
  }), [user]);

  return (
    <authContext.Provider value={value}>
      {!isLoading && children}
    </authContext.Provider>
  );
};

/** Auth context hook. */
export const useAuthContext = (): AuthContext => useContext(authContext);
