import { User } from '@supabase/supabase-js';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { SupabaseService } from '../services/supabase';

export const USER_QUERY_KEY = ['user'];

export const useUserQuery = (
  options?: UseQueryOptions<User | null, Error, User | null, string[]>,
): UseQueryResult<User | null, Error> => useQuery(USER_QUERY_KEY, SupabaseService.getUser, { ...options });
