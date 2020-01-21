const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let guild = message.guild
	let duyurular = guild.channels.find('name', '📢-𝘋𝘜𝘠𝘜𝘙𝘜𝘓𝘈𝘙-📢');
	if (!duyurular) return message.reply('`📢-𝘋𝘜𝘠𝘜𝘙𝘜𝘓𝘈𝘙-📢` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Bir şey yazmadınız.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:anchor: **Tüm Herkese Duyurulur ;**\n${mesaj}`)
    return guild.channels.get(duyurular.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 0,
  kategori:"Sunucu"
};

exports.help = {
  name: 'duyuruyap',
  aciklama: 'Sunucuda Duyuru yapmanızı sağlar.',
  kullanim: 'duyuruyap [yazı]'
};