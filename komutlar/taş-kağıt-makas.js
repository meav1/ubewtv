const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
  var choice = args[0];
  if (choice == "kağıt" || choice == "k") {
    var numb = Math.floor(Math.random() * 200);
    if (numb <= 50) {
      var choice2 = "kağıt";
    } else if (numb > 50) {
      var choice2 = "taş";
    } else {
      var choice2 = "makas";
    }
    if (choice2 == "makas") {
      var response = "Ben Seçiyorum **makas**! :v: Kazandımm!"
    } else if (choice2 == "kağıt") {
      var response = "Ben Seçiyorum **kağıt**! :hand_splayed: Berabere, Tebrikler!"
    } else {
      var response = "Ben Seçiyorum **taş**! :punch: Kazandın, Tebrikler!"
    }
    message.channel.send(response);
  } else if (choice == "taş" || choice == "t") {
    var numb = Math.floor(Math.random() * 200);
    if (numb <= 50) {
      var choice2 = "kağıt";
    } else if (numb > 50) {
      var choice2 = "taş";
    } else {
      var choice2 = "makas";
    }
    if (choice2 == "kağıt") {
      var response = "Ben Seçiyorum **Kağıt**! :hand_splayed: Kazandımm!"
    } else if (choice2 == "taş") {
      var response = "Ben Seçiyorum **Taş**! :punch: Hoop Berabere!"
    } else {
      var response = "Ben Seçiyorum **Takas**! :v: Kazandın, Tebrikler!"
    }
    message.channel.send(response);
  } else if (choice == "makas" || choice == "m") {
    var numb = Math.floor(Math.random() * 200);
    if (numb <= 50) {
      var choice2 = "kağıt";
    } else if (numb > 50) {
      var choice2 = "taş";
    } else {
      var choice2 = "makas";
    }
    if (choice2 == "taş") {
      var response = "Ben Seçiyorum **kağıt**! :hand_splayed: Kazandın!"
    } else if (choice2 == "makas") {
      var response = "Ben Seçiyorum **makas**! :v: Hoop Berabere!"
    } else {
      var response = "Ben Seçiyorum**taş**! :punch: Kazandımm!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Yardıma mı İhtiyacın Var :? \`mg!taskagitmakas <taş|kağıt|makas>\` `);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['taskagitmakas'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'taskagitmakas',
  description: 'MaxFly Bot ile Tas Kagıt Makas Oynarsın.',
  usage: 'taskagitmakas '
};
