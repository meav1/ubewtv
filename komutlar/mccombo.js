const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let combo = 'https://mc-heads.net/combo/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mccombo = new Discord.RichEmbed()
   .setColor('#ffa200')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(combo)
 message.channel.send(mccombo);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mccombo'],
 permLevel: 0,
  kategori:"minecraft"
};

exports.help = {
 name: 'mccombo',
 aciklama: 'Belirtilen oyuncunun kostümünü gösterir.',
 kullanim: 'mccombo <oyuncu>'
};