import { createClient, Session, Subscription, User } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_KEY,
);

export namespace SupabaseService {

  export async function signIn(): Promise<void> {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
    });
  }

  export async function signOut(): Promise<void> {
    await supabase.auth.signOut();
  }

  export function onUserChange(cb: (user: User | null) => void): Subscription {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      cb(session?.user ?? null);
    });
    return subscription;
  }

  export async function getSession(): Promise<Session | null> {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  }

  export async function getUser(): Promise<User | null> {
    const session = await getSession();
    return session?.user ?? null;
  }
}
