import { Lobby } from '../models/Lobby';

const MOCK_LOBBIES: Lobby[] = [
  {
    id: '1',
    name: 'Лоббак для талантов',
  },
  {
    id: '2',
    name: 'Лобби для крутых',
  },
  {
    id: 'q',
    name: 'Подсосне сюда',
  },
  {
    id: 'w',
    name: 'лобби 2',
  },
];

export namespace LobbyService {
  // eslint-disable-next-line require-await
  export async function getLobbies(): Promise<Lobby[]> {
    return MOCK_LOBBIES;
  }
}
