const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** MaxFly")
  .setFooter('MaxFly Bot', client.user.avatarURL)
  .setThumbnail("")
  .addField("» Linkler", `[Botu Ekle](https://discordapp.com/oauth2/authorize?client_id=663003174176555018&scope=bot&permissions=2146958847)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/drav42f)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=663003174176555018&scope=bot&permissions=2146958847')
  .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  aciklama: 'Bot ile ilgili bilgi verir.',
  kullanim: 'davet'
};