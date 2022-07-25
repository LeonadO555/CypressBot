const express = require('express');
const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const fs = require('fs');

const app = express();
const bot = new Telegraf('5299538119:AAGbM3Zjv_Zs-WxnVZhM0M0edtfqHBs1HLg');

function getMainMenu() {
  return Markup.keyboard([['Info']]).resize();
}

// let dataActualUser = fs.readFileSync('/tmp/dataActualUser.json', 'utf8');
let dataActualUserPartTwo = fs.readFileSync('/tmp/dataAllUser.json', 'utf8');
// function getAllUsers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataActualUser);
//     }, 500);
//   });
// }

function getAllUsersPartTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUserPartTwo);
    }, 500);
  });
}

bot.start((ctx) => {
  ctx.reply('ok', getMainMenu());
});
// bot.hears('Users from 1 to 10', async (ctx) => {
//   const data = await getAllUsers();
//   let result = '';
//   result = result + `${data}\n`;
//
//   ctx.replyWithPhoto(
//     'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
//     {
//       caption: 'Node 1:\n\n' + `${result}`,
//     }
//   );
// });

bot.hears('Info', async (ctx) => {
  const data = await getAllUsersPartTwo();
  let result = '';
  result = result + `${data}\n`;
  ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 1:\n\n' + `${result}`,
    }
  );
});

bot.launch();

app.listen(3000, () => console.log(`My server is running on port ${3000}`));
