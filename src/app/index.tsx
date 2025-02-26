import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NavigationRootProvider } from './navigation';

const queryClient = new QueryClient();

export function NavigationProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NavigationRootProvider />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
