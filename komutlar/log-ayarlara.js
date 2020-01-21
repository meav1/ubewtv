const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("Log olarak ayarlamak istediğiniz kanalı etiketlemelisiniz!") 
    }
  
  db.set(`${message.guild.id}.log`, channel.id)

    const embed = new Discord.RichEmbed()
    .setDescription(`» Sunucu Kayıtları kanalı başarıyla ${channel} olarak ayarlandı!`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['log-belirle'],
    permLevel: 3
}

exports.help = {
    name: 'log-ayarla',
    description: 'Sunucu kayıtları kanalını ayarlar.',
    usage: 'log-ayarla <#kanal>'
}