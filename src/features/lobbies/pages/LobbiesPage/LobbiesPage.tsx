import { Button, Stack, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { FC, useCallback } from 'react';
import { LobbyItem } from '../../components';
import { useLobbiesQuery } from '../../queries';

export const LobbiesPage: FC = () => {
  const { data: lobbies, isLoading } = useLobbiesQuery();

  const handleLobbyCreate = useCallback(() => {
    showNotification({
      title: 'Сорян',
      message: 'Мы еще не сделали лобби! 🤥 ',
    });
  }, []);

  return (
    <Stack
      sx={{ width: '100%', height: '100%' }}
      spacing={32}
    >
      <Stack
        sx={{ width: '100%' }}
        spacing={8}
      >
        <Title
          order={1}
          size="h1"
          sx={theme => ({
            marginInline: theme.spacing.md,
          })}
        >
          Список комнат

        </Title>
        {isLoading && <Text size="lg">Грузим лоббаки...</Text>}
        <Stack spacing={0}>
          {lobbies?.map(lobby => <LobbyItem key={lobby.id} lobby={lobby} />)}
        </Stack>
      </Stack>
      <Button
        variant="light"
        color="orange"
        sx={{
          marginTop: 'auto',
        }}
        onClick={handleLobbyCreate}
      >
        Создать комнату
      </Button>
    </Stack>
  );
};
