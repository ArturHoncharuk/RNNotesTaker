import { PropsWithChildren } from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

import { getTypographyColor } from '~/shared/constants/colors';

interface TypographyProps extends PropsWithChildren<TextProps> {
  cn?: string;
}

export const Typography = ({ children, cn, ...props }: TypographyProps) => {
  const colorScheme = useColorScheme();

  return (
    <Text className={`${getTypographyColor(colorScheme)} ${cn}`} {...props}>
      {children}
    </Text>
  );
};
