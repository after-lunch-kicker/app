import { createContext, PropsWithChildren, useMemo, useState, FC, useContext, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../services/supabase';

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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async(): Promise<void> => {
      const session = await SupabaseService.getSession();

      setUser(session?.user ?? null);
      setLoading(false);
    };

    init();

    const { unsubscribe } = SupabaseService.onUserChange(setUser);

    return () => {
      unsubscribe();
    };
  }, []);

  const value: AuthContext = useMemo(() => ({
    user,
  }), [user]);

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};

/** Auth context hook. */
export const useAuthContext = (): AuthContext => useContext(authContext);
