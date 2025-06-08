// index theme 
import dark from './dark'
import light from './light'
import christmas from './christmas'
import newYear from './newYear'

export type ThemeName = 'light' | 'dark' | 'christmas' | 'newYear';

export const themes: Record<ThemeName, Record<string, string>> = {
  light,
  dark,
  christmas,
  newYear,
};
