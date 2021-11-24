import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../build/middlewares.js';

require('dotenv').config()
import express from 'express';
const TelegramBot = require('node-telegram-bot-api');

const PORT = process.env.PORT;
const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import upload from './api/upload.js'

const addFiles = async function (req, res, next){ 
  let name = req.body.name[0]
  let tel = req.body.tel[0]
  let title = req.body.title
  let location = req.body.location
  let files = req.files

  const bot = new TelegramBot(token, {polling: true});

  let message = `${name} ${tel}\n ${title}\n ${location}` 
  bot.sendMessage(chatId, message);

  if(files && files.length > 0){
    for(let f = 0; files.length > f; f++){
      let destination = files[f].destination + '/' + files[f].filename
      let file_name = files[f].filename  
      let url = `static/gallery/${file_name}`;
      
      if(files[f].mimetype == 'image/jpeg' || files[f].mimetype == 'image/png' || files[f].mimetype == 'image/bmp' || files[f].mimetype == 'image/gif' || files[f].mimetype == 'image/tiff'){
        bot.sendPhoto(chatId, url);
      } else {
        bot.sendDocument(chatId, url);
      }
    }
  }
  
  bot.on('polling_error', (error) => {
    next()
  });

  res.end('Send message!');
}

app.post('/send/add', upload.array('images', 5), addFiles);

app.get('/no-svelte', (req, res) => {
  res.end('This is not Svelte!');
});

app.use(assetsMiddleware);
app.use(prerenderedMiddleware);
app.use(kitMiddleware);
app.use(express.static('static'))

app.listen(PORT, () => {
  console.log(`> New Running on localhost:${PORT}`);
});