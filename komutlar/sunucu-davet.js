const Discord = require("discord.js");

exports.run = async (anko, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setDescription(`**Sunucu Davet Link**:  ${invite}\n\nDAVET OLUŞTURLABİLMEM İÇİN ANLIK DAVET OLUŞTUR ÖZELLİĞİMİN AÇIK OLMASI GEREKİR. AKSİ TAKTİRDE OLUŞTURAMAZ.`);
    message.channel.send(embed);
  });
}


  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucudavet',
  description: 'Sunucunun Kalıcı Davet Linkini Oluşturur.',
  usage: 'sunucudavet'
};