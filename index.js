const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('I am ready!');
});

  client.on('message', msg => {
    if (msg.content === 'Finn' || msg.content === 'Oscar') {
      msg.reply('You\'re a pretty girl');
    }
  });


client.login(config.token);