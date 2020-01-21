const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed()
                         .setColor('RANDOM')
                         .setTitle('Komut girişi')
                         .setDescription('Gerekli Dosaylar Kurulsunmu?. ,Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek')
                         .setFooter('Kurulum Sistemi v.0.0.2'))
.then(() => {
      message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
              message.guild.createChannel(`kurallar`);
              message.guild.createChannel(`sohbet`);
              message.guild.createChannel(`bot-komut`);
              message.guild.createChannel(`video-paylaşma`);
              message.guild.createChannel(`gelen-giden`);
              message.guild.createChannel(`oto-rol`);
              message.guild.createChannel(`mod-log`);


      
        message.channel.send(`:white_check_mark:  Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"    
};

exports.help = {
  name: 'kurulum',
  description: 'Bot İçin gerekli kanalları kurar.',
  kullanim: 'kurulum'
};