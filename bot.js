const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'D') {
    	message.channel.send('@Bananie31#3044 Nu kan je wat game-vrienden krijgen  ;)');
  	}
});

client.on('message', message => {
    if (message.content === 'Wie is stom') {
    	message.reply('Jij natuurlijk');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
