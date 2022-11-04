import { Text } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Lobby } from '../../../../models/Lobby';

interface Props {
  readonly lobby: Lobby;
}

export const LobbyItem: FC<Props> = ({ lobby }) => (
  <Link
    to={`/lobby/${lobby.id}`}
  >
    <Text
      size="lg"
      sx={theme => ({
        'paddingInline': theme.spacing.md,
        'paddingBlock': theme.spacing.sm,
        'borderRadius': theme.radius.md,
        ':hover': {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      {lobby.name}
    </Text>
  </Link>
);
