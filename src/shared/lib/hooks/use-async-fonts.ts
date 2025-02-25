import { useFonts } from 'expo-font';

export function useAsyncFonts() {
  const [fontsLoaded, fontError] = useFonts({
    GautronRegular: require('~/shared/assets/fonts/Gautron-Regular.ttf'),
  });

  return { fontsLoaded, fontError };
}
