import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavigation } from '../../components/AppNavigation/AppNavigation';

export const DefaultLayout: FC = () => (
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
    <AppNavigation />
  </Stack>
);
