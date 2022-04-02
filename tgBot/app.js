const express = require('express');
const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const fs = require('fs');
const { log } = require('task/src/log');

const app = express();
const bot = new Telegraf('5299538119:AAGbM3Zjv_Zs-WxnVZhM0M0edtfqHBs1HLg');

function getMainMenu() {
  return Markup.keyboard([['All users viewing data'], ['LogBot']]).resize();
}
cy.writeFile('/tmp/dataAllUser.json', log);
let dataActualUser = fs.readFileSync('/tmp/dataActualUser.json', 'utf8');
let dataLog = fs.readFileSync('/tmp/dataAllUser.json', 'utf8');
function getAllUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUser);
    }, 500);
  });
}

function getLog() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataLog);
    }, 500);
  });
}

bot.start((ctx) => {
  ctx.reply('Yo guys', getMainMenu());
});
bot.hears('All users viewing data', async (ctx) => {
  const data = await getAllUsers();
  let result = '';
  result = result + `${data}\n`;

  ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'List all users data:\n\n' + `${result}`,
    }
  );
});

bot.hears('LogBot', async (ctx) => {
  const data = await getLog();
  let result = '';
  result = result + `${data}\n`;
  ctx.replyWithPhoto(
    'https://admitad.academy/wp-content/uploads/2021/07/02-%E2%95%A8v%E2%95%A8%E2%95%A1%E2%95%A8%E2%95%97%E2%95%A8%E2%95%A1%E2%95%A8%E2%94%82%E2%95%A4a%E2%95%A8%E2%96%91%E2%95%A8%E2%95%9D-%E2%95%A8%E2%96%92%E2%95%A8%E2%95%9B%E2%95%A4v-1812x1000-1.jpg',
    {
      caption: 'List log bot:\n\n' + `${result}`,
    }
  );
});

bot.launch();

app.listen(3000, () => console.log(`My server is running on port ${3000}`));
