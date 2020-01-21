const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async(client, message) => {
  
  let args = message.content.split(' ').slice(1);
  const tavsiye = args.slice(0).join(' ');
  if (tavsiye.length < 1) return message.reply('Lütfen istediğiniz skini yazınız.')

  message.reply('Skin isteğiniz başarıyla bildirildi.')

  https://discordapp.com/api/webhooks/664897765259739187/CCioMgzBVSNIVc2ijQuiwwAgr7IzUuBYYv1nv2A9dR8f6zxcpGDXPo0VXqqjVgGsHzcZ
  
 var web = new Discord.WebhookClient("664897765259739187","CCioMgzBVSNIVc2ijQuiwwAgr7IzUuBYYv1nv2A9dR8f6zxcpGDXPo0VXqqjVgGsHzcZ")
 var embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle('Yeni bir skin isteği var!')
 .addField('Bildiren Kullanıcı', message.author.tag)
 .addField('İstenilen Skin', tavsiye)
 
web.send(embed)



}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oner', 'öner', 'tavsiye', 'stavsiye'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'tavsiye',
  description: 'İstediğiniz skini eklemenize yardımcı olur',
  usage: 'Doğru kullanım mg!tavsiye <tavsiye>'
};