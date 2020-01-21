exports.run = (bot, msg, params) => {

    if(!params){
      return msg.channel.send(":x: " + "| Bot için Yeni Bir Ad Girin.");
    }
    msg.guild.member(bot.user).setNickname(params.join(" ")).then(user => msg.channel.send("Yeni Takma Adım " + params.join(" ") + "!")).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['name'],
  permLevel: 3,
  kategori:"Bot"
};

exports.help = {
  name: "takmaad",
  aciklama: "Sunucuda MaxFly Bot'a Takma Ad verir.",
  kullanim: "takmaad [TAKMAAD]"
};