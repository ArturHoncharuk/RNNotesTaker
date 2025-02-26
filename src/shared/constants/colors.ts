import { Appearance } from '../types';

export const Colors = {
  background_light: '#fff',
  background_dark: '#3c3c43',
};

/**
 * The function `getBackgroundColor` returns a background color based on the appearance parameter,
 * either dark or light.
 * @param {Appearance} appearance - The `appearance` parameter is a variable that represents the
 * appearance mode of the application, which can be either 'dark' or another value.
 * @returns a background color based on the appearance parameter. If the appearance is 'dark', it will
 * return 'bg-[#3c3c43]', which is a dark background color. Otherwise, it will return 'bg-[#fff]',
 * which is a white background color.
 */
export function getBackgroundColor(appearance: Appearance) {
  return appearance === 'dark' ? 'bg-[#3c3c43]' : 'bg-[#fff]';
}

/**
 * The function `getTypographyColor` returns either 'text-white' or 'text-black' based on the
 * appearance parameter being 'dark' or not=p
 * @param {Appearance} appearance - The `appearance` parameter is likely a string that represents the
 * color scheme or theme of the UI, such as 'dark' or 'light'. The `getTypographyColor` function
 * returns a CSS class name based on the appearance value provided. If the appearance is 'dark', it
 * returns 'text-white
 * @returns either 'text-white' if the appearance is 'dark', or 'text-black' if the appearance is not
 * 'dark'.
 */
export function getTypographyColor(appearance: Appearance) {
  return appearance === 'dark' ? 'text-white' : 'text-black';
}
