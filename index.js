
const { Telegraf } = require('telegraf')
require('dotenv').config()
console.log(`The server is running on port:` + process.env.PORT)
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on("go", async (ctx) => {
    let message = ` Please use /maestro command to talk to the GREAT MASTER`
     await ctx.reply(message)
})

bot.command('maestro', async (ctx)=> {
        await ctx.reply('dime kaizeneka')
})

bot.launch()