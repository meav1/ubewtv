const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: **HEY BU KOMUDU KULLANABİLMEK İÇİN NSFW KANALINDA OLMAN GEREK !**")

    var subreddits = [
        'pussy',
        'rearpussy',
        'simps',
        'vagina',
        'MoundofVenus',
       
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`pussy.gif`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./pussy.gif`)
            })
        })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı"
 };
 
 exports.help = {
 name: 'pussy',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'pussy'
 }