const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  
/*var helpers = "";
    for (var i = 0; i < ayarlar.helper.length; i++) {
        var şuanki = client.users.get(ayarlar.helper[i]).tag;
        if (i === 0) {
            helpers += şuanki
        }
        else if (i === ayarlar.helper.length - 1) {
            helpers += ", " + şuanki;
        } else {
            helpers += ", " + şuanki
        }
    }*/
  
        const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.addField(`» Botun İsmi/Adı:`, `MaxFly | Bot`)
		.addField(`» Botun Sahibi/Yapımcısı:`, `ByDieDRaGoN`)
    .addField(`» Kodlamada Yardımcı Olanlar:`, `Meav`)
    .addField(`» Botun Orjinal Prefixi/Ön-Eki:`, `${ayarlar.prefix}`)
    .addField(`» MaxFly| Bot | Destek Sistemi Kurulumu:`, `1- **Ücretli !**`)
		.addField(`» Botun Linkleri:`, `[Botu Sunucuna Eklemek İçin Tıkla!](https://discordapp.com/oauth2/authorize?client_id=663003174176555018&scope=bot&permissions=2146958847) \n[Botun Destek Sunucusuna Gelmek İçin Tıkla](https://discord.gg/drav42f)`)
    .setFooter('© ' + (new Date()).getFullYear() + ' MaxFly | Bot')
		.setThumbnail(client.user.avatarURL)
        message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hakkında'],
    permLevel: `Yetki gerekmiyor.`
  };
  
  exports.help = {
    name: 'bilgi',
    category: 'bot',
    description: 'Botun bilgisini gösterir.',
  };