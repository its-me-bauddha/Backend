const { Telegraf } = require('telegraf');
require('dotenv').config();
console.log(process.env.BOT_TOKEN);

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
//bot.on(message('sticker'), (ctx) => ctx.reply('heart'))
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
