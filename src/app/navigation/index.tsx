import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { NotesScreen, SplashScreen } from '~/screens';
import { RootStackParamList } from '~/shared/types/navigation';

const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export function NavigationRootProvider() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Notes" component={NotesScreen} />
    </Stack.Navigator>
  );
}
