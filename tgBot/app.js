const express = require('express');
const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const fs = require('fs');

const app = express();
const bot = new Telegraf('5299538119:AAGbM3Zjv_Zs-WxnVZhM0M0edtfqHBs1HLg');

function getMainMenu() {
  return Markup.keyboard([
    ['Actual user viewing data'],
    ['All users viewing data'],
    ['Button for WebMonkey'],
    ['LogBot'],
  ]).resize();
}

let dataActualUser = fs.readFileSync('/tmp/dataActualUser.json', 'utf8');
let dataAllUsers = fs.readFileSync('/tmp/dataAllUser.json', 'utf8');
function getActualUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUser);
    }, 500);
  });
}
function getAllUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataAllUsers);
    }, 500);
  });
}

bot.start((ctx) => {
  ctx.reply('Yo guys', getMainMenu());
});
bot.hears('Actual user viewing data', async (ctx) => {
  const data = await getActualUser();
  let result = '';
  result = result + `${data}\n`;
  const stringData = result.join(' ');
  let date = new Date();

  ctx.replyWithPhoto('https://sysblok.ru/wp-content/uploads/2020/09/anekdoty.jpg', {
    caption: `${date}\n` + 'List actual user data:\n\n' + `${stringData}`,
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

app.listen(3000, () => console.log(`My server is running on port ${3000}`));
