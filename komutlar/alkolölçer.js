const Discord = require('discord.js');

exports.run = (client, message) => {
      const random = Math.floor(Math.random() * 101) + 1
      message.channel.send(`:ballot_box_with_check: Alkol Dereceniz : **%${random}** `)
   } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
  kategori:"eğlence"
}

exports.help = {
  name: 'alkol-ölçer',
  aciklama: 'Alkol Kullanma Oranını Ölçer',
  kullanim: 'alkol'
};