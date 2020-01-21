const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

exports.run = (bot, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(bot.user.username)
            .setTitle("***ツ BOT İstatistikler***")
            .setColor("RANDOM")
            .addField("• 💡 Ram Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("• 💡 Çalışma Zamanı ", `${duration}`, true)
            .addField("• 👨 Kullanıcılar", `${bot.users.size.toLocaleString()}`, true)
            .addField("• 👨 Sunucular", `${bot.guilds.size.toLocaleString()}`, true)
            .addField("• 👨 Kanallar ", `${bot.channels.size.toLocaleString()}`, true)
            .addField("• 💪 Discord.js", `v${version}`, true)
            .addField("• 💪 Node", `${process.version}`, true)
            .addField("• 💪 CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("• 💪 CPU Kullanımı", `\`${percent.toFixed(2)}%\``, true)
            .addField("• 💪 Bit", `\`${os.arch()}\``, true)
            .addField("• 💻 İşletim Sistemi", `\`\`${os.platform()}\`\``, true)
            .addField("• 📶 API Ping", `${Math.round(bot.ping)}ms`)  
        message.channel.send(embedStats)
    });
};


exports.conf = { // Özel ayarları belirtiyoruz.
	enabled: true, // Aktif mi değil mi? (true, false)
	guildOnly: true, // Sadece sunucuda mı kullanılsın? (true, false)
	aliases: [], // Sadece komutu değilde bunlarıda yazarsa bu işlemi gerçekleştir diyoruz.
	permLevel: 0,
	kategori: 'kullanıcı' // Yardım komutunda gözükecek kategoriyi belirtiyoruz.
}

exports.help = { // Ana ayarları belirtiyoruz.
	name: 'botstats', // Komutu belirtiyoruz.
	aciklama: 'Bot Statslarını Gösterir.', // Yardımda gözüken açıklamayı belirtiyoruz.
	kullanim: 'botstats' // Yardımda gözükecek kullanımı belirtiyoruz.
}
