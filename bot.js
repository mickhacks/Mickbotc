const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
});

client.on('message', message => {
    if (message.content === 'poef') {
    	message.channel.send('!purge 5');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
    
    bot.user.setPresence({ game: { name: 'Ik hou van Mickje', type: 0 } });
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
