const TelegramAPI = require('node-telegram-bot-api');
const Token = '5161510877:AAFe1org2C3aqNEdz_rbIo1kmzgwnLddYLE';

const Bot = new TelegramAPI(Token, {polling: true});

Bot.on('message', message => {
  console.log(message)
  const chatId = message.chat.id;
  Bot.sendMessage(chatId, 'Руслан хуй');
})

Bot.on("polling_error", console.log);