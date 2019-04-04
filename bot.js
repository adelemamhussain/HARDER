const Discord = require("discord.js");
const client = new Discord.Client();
var fox = "By KillerFox";  // ممنوع اللمس
var perfix = "By KillerFox";
var adminprefix = "$";
console.log('Code BC By KillerFox Embed and Avatar ');
client.on('message', message => { // BY KillerFox or ALphaCodes
    if (message.author.id === client.user.id) return; // BY KillerFox or ALphaCodes
    if (message.guild) { // BY KillerFox or ALphaCodes
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' '); // BY KillerFox or ALphaCodes
if(message.content.split(' ')[0] == '$bc') { // غير امر او برفكس
    if (!args[1]) { // BY KillerFox or ALphaCodes
message.channel.send("**$bc <Messages> :incoming_envelope:  **"); // ممنوع المس
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return; // ممنوع اللمس
            var bc = new Discord.RichEmbed()
            .setThumbnail(client.user.avatarURL)
            .addField(':beginner: Server :beginner: :twisted_rightwards_arrows: ', `${message.guild.name}`)
            .addField(':heartpulse:  Sender :heartpulse: :twisted_rightwards_arrows: ', `${message.author.username}#${message.author.discriminator}`)
            .addField(':scroll: Message :scroll: :twisted_rightwards_arrows: ', args)
            .setFooter('Devolope Code By !   Felobater|HN#9499') // حط اي شي تبيه
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


client.login(process.env.BOT_TOKEN);
