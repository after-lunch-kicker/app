import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseLayout: FC = () => (
  <Stack
    sx={{
      p: 'md',
      height: '100%',
    }}
  >
    <Center
      sx={{
        minHeight: '50%',
        marginTop: 'auto',
        width: '100%',
      }}
    >
      <Outlet />
    </Center>
  </Stack>
);
