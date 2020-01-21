const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let head = 'https://mc-heads.net/head/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mchead = new Discord.RichEmbed()
   .setColor('#ffa200')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(head)
 message.channel.send(mchead);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['minecraftskin','skin'],
 permLevel: 0,
  kategori:"minecraft"
};

exports.help = {
 name: 'mchead',
 aciklama: 'Belirtilen oyuncunun kostümünü gösterir.',
 kullanim: 'mchead <oyuncu>'
};