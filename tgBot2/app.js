const express = require('express');
const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
const fs = require('fs');

const app = express();
const bot = new Telegraf('5382585847:AAGT9swtPbKW9QVRGy6cv0ltArWLMQl5_Ac');

function getMainMenu() {
  return Markup.keyboard([['Users from 20 to 30'], ['Users from 30 to 41']]).resize();
}

let dataPartOne = fs.readFileSync('/tmp/dataActualUser.json', 'utf8');
let dataPartTwo = fs.readFileSync('/tmp/dataAllUser.json', 'utf8');
function getAllUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataPartOne);
    }, 500);
  });
}

function getAllUsersPartTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataPartTwo);
    }, 500);
  });
}

bot.start((ctx) => {
  ctx.reply('Yo guys', getMainMenu());
});
bot.hears('Users from 20 to 30', async (ctx) => {
  const data = await getAllUsers();
  let result = '';
  result = result + `${data}\n`;

  ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 2:\n\n' + `${result}`,
    }
  );
});

bot.hears('Users from 30 to 41', async (ctx) => {
  const data = await getAllUsersPartTwo();
  let result = '';
  result = result + `${data}\n`;
  ctx.replyWithPhoto(
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1509770/69b21ff730be7c4eff319d0d0e3691a249574e12.jpg',
    {
      caption: 'Node 2:\n\n' + `${result}`,
    }
  );
});

bot.launch();

app.listen(3000, () => console.log(`My server is running on port ${3000}`));
