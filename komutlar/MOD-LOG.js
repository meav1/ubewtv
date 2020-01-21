const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {

let logk = message.mentions.channels.first()
if (!logk) return message.channel.send('Bir Mod-Log Kanalı Belirlemelisin!')

db.set(`modlogK_${message.guild.id}`, logk)

message.channel.send(`Mod-Log Kanalı Başarıyla ${logk} olarak ayarlandı.`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log-ayarla',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
}