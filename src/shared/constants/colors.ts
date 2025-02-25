import { Appearance } from '../types';

export const Colors = {
  background_light: '#fff',
  background_dark: '#3c3c43',
};

export function getBackgroundColor(appearance: Appearance) {
  return appearance === 'dark' ? 'bg-[#3c3c43]' : 'bg-[#fff]';
}

export function getTypographyColor(appearance: Appearance) {
  return appearance === 'dark' ? 'text-white' : 'text-black';
}
