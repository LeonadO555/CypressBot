import { Markup } from 'telegraf';

export function getMainMenu() {
  return Markup.keyboard([['Actual user viewing data'], ['All users viewing data'], ['Button for WebMonkey']]).resize();
}
