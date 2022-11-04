import { SupabaseService } from './supabase';

export namespace AuthService {
  export async function signIn(): Promise<void> {
    await SupabaseService.signIn();
  }
}
