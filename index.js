const TelegramApi = require('node-telegram-bot-api')
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramApi(token, {polling: true})


const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начало'}
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        console.log(msg);
    
        if(text === '/start'){
            return bot.sendMessage(chatId, `hello, ${msg.from.first_name}!`)
        }
        if(text === '/game'){

        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)')
    })

}

start();