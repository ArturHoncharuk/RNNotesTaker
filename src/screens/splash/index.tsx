import { useEffect } from 'react';

import { RootStackScreenProps } from '~/shared/types/navigation';
import { SafeViewContainer, Typography } from '~/shared/ui';

const NAVIGATION_DELAY = __DEV__ ? 1000 : 5000;

export function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Notes');
    }, NAVIGATION_DELAY);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeViewContainer cn="flex-1 items-center justify-center">
      <Typography cn="text-4xl font-[GautronRegular]">NotesKeeper</Typography>
    </SafeViewContainer>
  );
}
