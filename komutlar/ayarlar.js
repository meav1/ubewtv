const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');

exports.run = async (client, message, args, member) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  let kufurfiltre = await db.fetch(`kufur_${message.guild.id}`)
  let kufurYazi;
  if (kufurfiltre == null) kufurYazi = 'Kapalı'
  if (kufurfiltre == 'acik') kufurYazi = 'Açık'
  if (kufurfiltre == 'kapali') kufurYazi = 'Kapalı'
  //
  
   let reklamfiltre = await db.fetch(`reklam_${message.guild.id}`)
  let reklamYazi;
  if (reklamfiltre == null) reklamYazi = 'Kapalı'
  if (reklamfiltre == 'acik') reklamYazi = 'Açık'
  if (reklamfiltre == 'kapali') reklamYazi = 'Kapalı'

const ayarlar = new Discord.RichEmbed()
      .setColor(0xFF7C00)
  .setTitle(`${message.guild.name} adlı sunucunun ayarları:`)
.addField("Küfür engelleme", `${kufurYazi}`, true)
  .addField("Reklam engelleme", `${reklamYazi}`, true)
message.channel.send(ayarlar)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'ayarlar',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: '/avatar [@Kişi]'
 }