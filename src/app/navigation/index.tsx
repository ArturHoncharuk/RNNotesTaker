import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { SplashScreen } from '~/screens';

const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export function NavigationRootProvider() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
}
