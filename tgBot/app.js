import express from 'express';
import { PORT, TOKEN } from './config.js';
import { Telegraf } from 'telegraf';
import { getMainMenu } from './keyboards.js';
import { getActualUser, getAllUsers } from './db.js';

const app = express();
const bot = new Telegraf(TOKEN);

bot.start((ctx) => {
  ctx.reply('Yo guys', getMainMenu());
});
bot.hears('Actual user viewing data', async (ctx) => {
  const data = await getActualUser();
  let result = '';

  let i = 0;
  result = result + `[${i + 1}] ${data}\n`;
  let date = new Date();
  ctx.replyWithHTML(`<b>${date}</b>\n` + '<b>List actual user data:</b>\n\n' + `${result}`);
  ctx.replyWithPhoto('https://sysblok.ru/wp-content/uploads/2020/09/anekdoty.jpg', {
    caption: 'Farm farm farm baby!',
  });
});

bot.hears('All users viewing data', async (ctx) => {
  const data = await getAllUsers();
  let result = '';
  for (let i = 0; i < 11; i++) {
    result = result + `[${i + 1}] ${data}\n`;
  }
  let date = new Date();
  ctx.replyWithHTML(`<b>${date}</b>\n` + '<b>List all users data:</b>\n\n' + `${result}`);
  ctx.replyWithPhoto('https://proza.ru/pics/2019/11/18/834.jpg', {
    caption: 'Waiting for all users to run',
  });
});
bot.hears('Button for WebMonkey', (ctx) => {
  ctx.replyWithPhoto('https://ebanoe-it.ru/wp-content/uploads/2021/07/makaka.jpg', {
    caption: 'Miha this is for you',
  });
});

bot.launch();

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`));
