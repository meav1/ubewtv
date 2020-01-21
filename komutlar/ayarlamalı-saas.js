const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send("Aç yada kapat yazmalısın  `!!!sa-as <aç/kapat>`")
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`ssaass_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(`Kullanıcılar Selam Verince Cevap Verecek.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`ssaass_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(`Artık Kullanıcılar Selam Verince Cevap Vermeyecek .`)
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Botun pingini gösterir.',
  usage: 'sa-as'
};