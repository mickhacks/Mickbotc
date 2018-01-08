const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
     let msg = message.content.toUpperCase(); 
     let sender = message.author; 
    
});

client.on('message', message => {
    if (message.content === 'tyfus') {
    	message.channel.send('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'Kut') {
    	message.reply('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'tering') {
    	message.channel.send('Niet schelden godverdomme');
  	}
});

client.on('message', message => {
    if (message.content === 'hoi') {
    	message.channel.send('doei');
  	}
});

client.on('message', message => {
    if (message.content === 'yo') {
    	message.channel.send('hey homo');
  	}
});

client.on('message', message => {
    if (message.content === 'hey') {
    	message.channel.send('doei');
  	}
});

client.on('message', message => {
    if (message.content === 'oke') {
    	message.channel.send('vagina');
  	}
});

client.on('message', message => {
    if (message.content === 'nee') {
    	message.channel.send('piemels likken');
  	}
});

client.on('message', message => {
    if (message.content === 'thx') {
    	message.channel.send('niks thx zoek een leven');
  	}
});

client.on('message', message => {
    if (message.content === 'nice') {
    	message.channel.send('wat nou nice lik een piemel');
  	}
});

client.on('message', message => {
    if (message.content === 'lol') {
    	message.channel.send('je moeder is een snol');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
