import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { Lobby } from '../../../models/Lobby';
import { LobbyService } from '../../../services/lobby';

export const useLobbiesQuery = (options?: UseQueryOptions<Lobby[], Error, Lobby[], string[]>): UseQueryResult<Lobby[], Error> =>
  useQuery(['lobbies'], LobbyService.getLobbies, { ...options });
