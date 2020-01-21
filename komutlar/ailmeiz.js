const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('MaxFly Bot |♥ Ailemiz ✿ ')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var ! (MaxFly Bot)`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['MaxFly aile', 'aile', 'ailemiz', 'family'],
  permLevel: 0,
  kategori: 'kullanıcı'
};

exports.help = {
  name: "sunuculiste",
  aciklama: "Sunucunun Tüm Üyelerini ve Sunucularını Gösterir.",
  kullanim: "ailemiz"
};