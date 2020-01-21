const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: **HEY BU KOMUDU KULLANABİLMEK İÇİN NSFW KANALINDA OLMAN GEREK !**")

    var subreddits = [
        'HENTAI_GIF',
        'hentai_irl'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`hentai.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./hentai.jpg`)
            })
        })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'hentai',
    description: 'ass',
    usage: 'ass'
};