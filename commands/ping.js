const Discord = require('discord.js')
module.exports = {
  name: "ping",
  category: "bought",
  cooldown: 0,
  description: "Set Logs Channel!",
  aliases: ['pong', 'peng'],
  usage: "SetLogs <Mention Channel>",
  execute(message, args, client) {
    let pembed = new Discord.MessageEmbed()
    .setColor("#ff8cf0")
    .setTitle("🏓 Pong!")
    .setThumbnail(message.guild.iconURL())
    .addField("**Latency**", `\`${message.createdTimestamp - Date.now()}ms\``)
    .addField("**API Latency**", `\`${Math.round(client.ws.ping)}ms\``)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL());

    message.channel.send(`🏓 Pinging....`).then(async msg =>{
       await msg.edit(' ', pembed);
    })
  }}