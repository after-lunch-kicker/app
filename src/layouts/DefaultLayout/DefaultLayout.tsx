import { Container, Stack } from '@mantine/core';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavigation } from '../../components/AppNavigation/AppNavigation';

export const DefaultLayout: FC = () => (
  <Stack
    sx={{
      height: '100%',
    }}
    spacing={32}
  >
    <Container
      sx={theme => ({
        minHeight: 'calc(50%)',
        marginTop: 'auto',
        width: '100%',
        paddingInline: theme.spacing.md,
      })}
    >
      <Outlet />
    </Container>
    <AppNavigation />
  </Stack>
);
