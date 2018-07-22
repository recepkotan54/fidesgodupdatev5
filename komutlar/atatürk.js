const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
      file:"https://media.giphy.com/media/lbOK3uj00mqLC/giphy.gif",
          color: 0xD97634,
		  description: "**Atatürk :heart: !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atatürkü Gösterir.',
  usage: 'atatürk'
};
