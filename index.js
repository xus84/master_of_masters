
const { Telegraf } = require('telegraf')
require('dotenv').config()
console.log(`The server is running on port:` + process.env.PORT)
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx)=> ctx.reply('Introduce /maestro para sentir tu ki'))  

bot.command('maestro', async (ctx)=> {
        await ctx.reply('dime kaizeneka')
})

bot.launch()
