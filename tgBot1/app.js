const express = require('express');
const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const fs = require('fs');

const app = express();
const bot = new Telegraf('5299538119:AAGbM3Zjv_Zs-WxnVZhM0M0edtfqHBs1HLg');

let dataActualUserPartOne = fs.readFileSync('/tmp/dataActualUser.json', 'utf8');
let dataActualUserPartTwo = fs.readFileSync('/tmp/dataAllUser.json', 'utf8');
let dataActualUserPartThree = fs.readFileSync('/tmp/dataPartThree.json', 'utf8');
let dataActualUserPartFour = fs.readFileSync('/tmp/dataPartFour.json', 'utf8');
function getAllUsersPartOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUserPartOne);
    }, 500);
  });
}

function getAllUsersPartTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUserPartTwo);
    }, 500);
  });
}

function getAllUsersPartThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUserPartThree);
    }, 500);
  });
}

function getAllUsersPartFour() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataActualUserPartFour);
    }, 500);
  });
}

function getMainMenu() {
  return Markup.keyboard([['😎 Part 1'], ['😎 Part 2'], ['😎 Part 3'], ['😎 Part 4']])
    .oneTime()
    .resize();
}

bot.command('custom', async (ctx) => {
  return await ctx.reply('Custom buttons keyboard', getMainMenu);
});

bot.hears('😎 Part 1', async (ctx) => {
  const data = await getAllUsersPartOne();
  let result = '';
  result = result + `${data}\n`;

  await ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 1:\n\n' + `${result}`,
    }
  );
});

bot.hears('😎 Part 2', async (ctx) => {
  const data = await getAllUsersPartTwo();
  let result = '';
  result = result + `${data}\n`;

  await ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 1:\n\n' + `${result}`,
    }
  );
});

bot.hears('😎 Part 3', async (ctx) => {
  const data = await getAllUsersPartThree();
  let result = '';
  result = result + `${data}\n`;

  await ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 1:\n\n' + `${result}`,
    }
  );
});

bot.hears('😎 Part 4', async (ctx) => {
  const data = await getAllUsersPartFour();
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
