const Discord = require('discord.js');
var request = require('request');

module.exports.run = (client, message, args) => {
    request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setTitle(info.soz)); // ve konsola çıktıyı versin.
    }
})};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
	kategori: 'eğlence'
}

exports.help = {
	name: 'espiri',
	aciklama: 'Bot Espri Yapar.',
	kullanim: 'espiri'
}