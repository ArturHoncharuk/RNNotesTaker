import { NavigationContainer } from '@react-navigation/native';

import { NavigationRootProvider } from './navigation';

export function NavigationProvider() {
  return (
    <NavigationContainer>
      <NavigationRootProvider />
    </NavigationContainer>
  );
}
