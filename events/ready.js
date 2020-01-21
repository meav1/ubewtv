const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`>>>  BOT: Aktif, Komutlar yüklendi!`);
  console.log(`>>> BOT: ${client.user.username} ismi ile giriş yapıldı!`);
    console.log(`>>> BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

  client.user.setStatus("online");
   var oyun = [
        "❄ EFSANE 2020 GÜNCELLEMESİ !",
        "💪 7/24 Aktif! MaxFly BOTU",
        "💡 mg!davet | Botumuzu ekleyin 💡",
        "☪ mg!yardım ☪ mg!davet ☪ mg!otorol ☪",
        "☪ Beta V1 ☪",
        
        
   ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.youtube.com/channel/UC9KE3w5vrx8JWRGNiV9jbeQ?view_as=subscriber");
        }, 7 * 900);
}