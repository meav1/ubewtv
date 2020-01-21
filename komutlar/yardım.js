const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`MaxFly Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`MaxFly Bot - Yardım`, `\n:white_small_square: | **mg!yetkili** : Sunucuyu Yönetmek için Kullanılan Komutlar !\n\:white_small_square: | **mg!eğlence**: Kullanıcılar için eğlence komutları.\n:white_small_square: | **mg!müzik**: Müzik Komutları.\n:white_small_square: | **mg!minecraft**:Minecraft `)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım', 'komutlar','help'],
    permLevel: 0,
      kategori:"KODLAMA ASAMASINDA"

  };
  
  exports.help = {
      name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };