const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: **HEY BU KOMUDU KULLANABİLMEK İÇİN NSFW KANALINDA OLMAN GEREK !**")

    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "60FPSPorn",
        "porn_gifs",
   
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
        })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'pgif',
    description: 'pgif',
    usage: 'pgif'
};