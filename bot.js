const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'; // This is the prefix, you can change it to whatever you want.


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
    
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
