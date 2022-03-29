const express = require('express');
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
  result = result + `${data}\n`;
  let date = new Date();
  ctx.replyWithPhoto('https://sysblok.ru/wp-content/uploads/2020/09/anekdoty.jpg', {
    caption: `${date}\n` + 'List actual user data:\n\n' + `${result}`,
  });
});

bot.hears('All users viewing data', async (ctx) => {
  const data = await getAllUsers();
  let result = '';
  result = result + `${data}\n`;
  let date = new Date();
  ctx.replyWithPhoto('https://proza.ru/pics/2019/11/18/834.jpg', {
    caption: `${date}\n` + 'List all users data:\n\n' + `${result}`,
  });
});
bot.hears('Button for WebMonkey', (ctx) => {
  ctx.replyWithPhoto('https://ebanoe-it.ru/wp-content/uploads/2021/07/makaka.jpg', {
    caption: 'Miha this is for you',
  });
});

bot.hears('LogBot', (ctx) => {
  ctx.replyWithPhoto('https://s5o.ru/storage/simple/ua/ugc/34/49/0b/13/uau44cb127072.jpg', {
    caption: 'While here is the image',
  });
});

bot.launch();

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`));
