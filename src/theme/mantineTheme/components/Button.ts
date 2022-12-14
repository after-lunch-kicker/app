import { MantineThemeComponent } from '.';

export const Button: MantineThemeComponent = {
  defaultProps: {
    size: 'xl',
    radius: 'lg',
  },
  styles: theme => ({
    label: {
      fontSize: theme.fontSizes.lg,
    },
  }),
};
