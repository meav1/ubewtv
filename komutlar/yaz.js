const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply(':no_entry: Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
    console.log("mg!yaz" + message.author.username + " tarafından kullanıldı.")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['say', 'söyle', 'yaz', ],
  permLevel: 4,
	kategori:'YETKİLİ' // Yardım komutunda gözükecek kategoriyi belirtiyoruz.
};

exports.help = {
  name: 'yaz',
  aciklama : 'İstediğiniz şeyi bota yazdırır.',
    kullanim: 'yaz [yazdırmak istediğiniz şey]'
};
