const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  var m = await message.channel.send(`Ping Hesaplanıyor...`)

    const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`⌛️ Botun Gecikme`, )
    .setDescription(`${client.ping}ms.`)
    return m.edit(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gecikme', 'gecikme-süresi'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'ping',
  category: "bot",
  description: 'Botun gecikme süresini gösterir.',
};