import { Appearance } from '../types';

export const Colors = {
  light: '#000',
  dark: '#fff',

  background_light: '#fff',
  background_dark: '#3c3c43',
};

export function getBackgroundColor(appearance: Appearance) {
  return `bg-[${Colors[appearance === 'dark' ? 'background_dark' : 'background_light']}]`;
}

export function getTypographyColor(appearance: Appearance) {
  return `text-${appearance === 'dark' ? 'white' : 'dark'}`;
}
