import { MantineTheme } from '@mantine/core';

import { Button } from './Button';

export type MantineThemeComponent = MantineTheme['components'][keyof MantineTheme['components']];

export const components: MantineTheme['components'] = {
  Button,
};
