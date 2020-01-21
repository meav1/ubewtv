const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`:x: | Yetkin bulunmamakta!`);
       let rol = message.mentions.roles.first()
       if (!rol) return message.channel.send('Ayarlamak istediğin rolü etiketlemelisin!')
      db.set(`discorole_${message.guild.id}`, rol.name)
      message.channel.send(` \`Renk Değiştiren\` rol başarıyla \`${rol.name}\` olarak **ayarlandı!**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["diskorol"], 
  permLevel: 3,
};

exports.help = {
  name: 'discorolayarla', 
  description: "", 
  usage: '' 
};