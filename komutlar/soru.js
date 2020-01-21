const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const cleverbot = require('cleverbot.io');

var bot = new cleverbot('merhaba','merhabas');
exports.run = (client, message, params) => {
  
  let yazi = params.slice(0).join(' ');
  if (yazi.length < 1) return message.channel.send(`Bir soru sormalısın.`);
  
  message.channel.send(`Cevap yükleniyor...`).then (message => {
  client.create(function (err, session) {
    client.ask(yazi, function (err, response) {
     message.edit(response);
 });
 
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'sor',
  usage: 'sor'
};