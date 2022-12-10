
const { Telegraf } = require('telegraf')
require('dotenv').config()
console.log(`The server is running on port:` + process.env.PORT)
const bot = new Telegraf(process.env.BOT_TOKEN, {username: 'maestro_de_maestros_bot'})

bot.start((ctx)=> ctx.reply('Introduce /maestro para sentir tu ki'))  

bot.command('maestro', async (ctx)=> {
        await ctx.reply('dime kaizeneka')
})

bot.hears(/buenos dias/i, async (ctx) => {
        await ctx.reply('Buenos dias ganad@r')
})


bot.launch()
