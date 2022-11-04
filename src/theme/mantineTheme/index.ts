import { MantineThemeOverride } from '@mantine/core';

import { headings } from './headings';
import { components } from './components';

export const mantineTheme: MantineThemeOverride = {
  fontFamily: '"Roboto Condensed", sans-serif',
  headings,
  components,
  fontSizes: {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 24,
    xl: 28,
  },
  lineHeight: 1.2,
};
