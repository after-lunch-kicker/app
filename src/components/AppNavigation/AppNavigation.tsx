import { Group, UnstyledButton } from '@mantine/core';
import { FC, useCallback } from 'react';
import { SupabaseService } from '../../services/supabase';

export const AppNavigation: FC = () => {
  const handleSignOut = useCallback(SupabaseService.signOut, []);

  return (
    <Group
      sx={theme => ({
        borderTop: `2px solid ${theme.colors.gray[3]}`,
        justifyContent: 'space-around',
      })}
      px="xl"
      py="lg"
    >
      <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66668 10.6667C6.40306 10.6667 7.00001 10.0697 7.00001 9.33333C7.00001 8.59695 6.40306 8 5.66668 8C4.9303 8 4.33334 8.59695 4.33334 9.33333C4.33334 10.0697 4.9303 10.6667 5.66668 10.6667Z" fill="#737373" />
        <path d="M5.66668 17.3333C6.40306 17.3333 7.00001 16.7363 7.00001 16C7.00001 15.2636 6.40306 14.6666 5.66668 14.6666C4.9303 14.6666 4.33334 15.2636 4.33334 16C4.33334 16.7363 4.9303 17.3333 5.66668 17.3333Z" fill="#737373" />
        <path d="M5.66668 24C6.40306 24 7.00001 23.4031 7.00001 22.6667C7.00001 21.9303 6.40306 21.3334 5.66668 21.3334C4.9303 21.3334 4.33334 21.9303 4.33334 22.6667C4.33334 23.4031 4.9303 24 5.66668 24Z" fill="#737373" />
        <path d="M27.08 14.6666H10.92C10.2278 14.6666 9.66669 15.2278 9.66669 15.92V16.08C9.66669 16.7722 10.2278 17.3333 10.92 17.3333H27.08C27.7722 17.3333 28.3334 16.7722 28.3334 16.08V15.92C28.3334 15.2278 27.7722 14.6666 27.08 14.6666Z" fill="#737373" />
        <path d="M27.08 21.3334H10.92C10.2278 21.3334 9.66669 21.8945 9.66669 22.5867V22.7467C9.66669 23.4389 10.2278 24 10.92 24H27.08C27.7722 24 28.3334 23.4389 28.3334 22.7467V22.5867C28.3334 21.8945 27.7722 21.3334 27.08 21.3334Z" fill="#737373" />
        <path d="M27.08 8H10.92C10.2278 8 9.66669 8.56114 9.66669 9.25333V9.41333C9.66669 10.1055 10.2278 10.6667 10.92 10.6667H27.08C27.7722 10.6667 28.3334 10.1055 28.3334 9.41333V9.25333C28.3334 8.56114 27.7722 8 27.08 8Z" fill="#737373" />
      </svg>

      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" stroke="#737373" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M31.1334 22.4043L36.09 20.3043L38.5069 13.4362M41.9062 25.3097L36.09 20.3043M16.8666 22.4043L11.91 20.3043L9.49313 13.4362M6.09375 25.3097L11.91 20.3043M24 16.4203V11.0231L30 7.0256M18 7.02466L24 11.0231M29.25 30L31.875 34.5L29.25 41.1562M38.5069 34.5H32.0625M18.75 30L16.125 34.5L18.7847 41.2031M9.52781 34.5H16.125M24 16.4203L16.8666 22.4043L18.75 30H29.25L31.1334 22.4043L24 16.4203Z" stroke="#737373" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <UnstyledButton onClick={handleSignOut}>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6666 14.6667C17.7215 14.6667 18.7526 14.3539 19.6297 13.7678C20.5067 13.1818 21.1903 12.3489 21.594 11.3743C21.9977 10.3998 22.1033 9.32742 21.8975 8.29285C21.6917 7.25829 21.1838 6.30798 20.4379 5.5621C19.692 4.81622 18.7417 4.30827 17.7071 4.10248C16.6726 3.89669 15.6002 4.00231 14.6257 4.40598C13.6511 4.80965 12.8182 5.49323 12.2321 6.37029C11.6461 7.24736 11.3333 8.2785 11.3333 9.33334C11.3333 10.7478 11.8952 12.1044 12.8954 13.1046C13.8956 14.1048 15.2522 14.6667 16.6666 14.6667ZM16.6666 6.66667C17.1941 6.66667 17.7096 6.82307 18.1482 7.11608C18.5867 7.4091 18.9285 7.82558 19.1303 8.31285C19.3322 8.80012 19.385 9.33629 19.2821 9.85358C19.1792 10.3709 18.9252 10.846 18.5523 11.219C18.1793 11.5919 17.7042 11.8459 17.1869 11.9488C16.6696 12.0517 16.1334 11.9988 15.6462 11.797C15.1589 11.5952 14.7424 11.2534 14.4494 10.8149C14.1564 10.3763 14 9.86075 14 9.33334C14 8.62609 14.2809 7.94781 14.781 7.44772C15.2811 6.94762 15.9594 6.66667 16.6666 6.66667ZM16.6666 17.3333C14.1913 17.3333 11.8173 18.3167 10.067 20.067C8.31664 21.8173 7.33331 24.1913 7.33331 26.6667C7.33331 27.0203 7.47379 27.3594 7.72384 27.6095C7.97389 27.8595 8.31302 28 8.66665 28C9.02027 28 9.35941 27.8595 9.60945 27.6095C9.8595 27.3594 9.99998 27.0203 9.99998 26.6667C9.99998 24.8986 10.7024 23.2029 11.9526 21.9526C13.2028 20.7024 14.8985 20 16.6666 20C18.4348 20 20.1304 20.7024 21.3807 21.9526C22.6309 23.2029 23.3333 24.8986 23.3333 26.6667C23.3333 27.0203 23.4738 27.3594 23.7238 27.6095C23.9739 27.8595 24.313 28 24.6666 28C25.0203 28 25.3594 27.8595 25.6095 27.6095C25.8595 27.3594 26 27.0203 26 26.6667C26 24.1913 25.0166 21.8173 23.2663 20.067C21.516 18.3167 19.142 17.3333 16.6666 17.3333Z" fill="#737373" />
        </svg>
      </UnstyledButton>
    </Group>
  );
};
