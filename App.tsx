import { NavigationProvider } from '~/app';
import { useAsyncFonts } from '~/shared/lib';
import './global.css';

export default function App() {
  const { fontsLoaded } = useAsyncFonts();

  if (!fontsLoaded) return null;

  return <NavigationProvider />;
}
