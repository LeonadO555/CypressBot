const express = require('express');
const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const fs = require('fs');

const app = express();
const bot = new Telegraf('5299538119:AAGbM3Zjv_Zs-WxnVZhM0M0edtfqHBs1HLg');

function getMainMenu() {
  return Markup.keyboard([{ text: 'Full users', callback_data: 'services' }]).resize();
}

let dataActualUser = fs.readFileSync('/tmp/dataActualUser.json', 'utf8');
// let dataActualUserPartTwo = fs.readFileSync('/tmp/dataAllUser.json', 'utf8');
function getAllUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUser);
    }, 500);
  });
}

// function getAllUsersPartTwo() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataActualUserPartTwo);
//     }, 500);
//   });
// }
bot.command('onetime', (ctx) => ctx.reply('One time keyboard', Markup.keyboard(['/select']).oneTime().resize()));

bot.command('custom', async (ctx) => {
  return await ctx.reply(
    Markup.keyboard([['😎 Full users']])
      .oneTime()
      .resize()
  );
});

bot.hears('😎 Full users', async (ctx) => {
  const data = await getAllUsers();
  let result = '';
  result = result + `${data}\n`;

  await ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 1:\n\n' + `${result}`,
    }
  );
});

bot.launch();

app.listen(3000, () => console.log(`My server is running on port ${3000}`));
