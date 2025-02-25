import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getBackgroundColor } from '~/shared/constants/colors';

export const SafeViewContainer = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className={`flex-1 px-5 ${getBackgroundColor(colorScheme)}`}>
      {children}
    </SafeAreaView>
  );
};
