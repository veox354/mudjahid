const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

module.exports = {
    name: "nuke",
    category: "nuke",
    cooldown: 0,
    description: "Set Logs Channel!",
    usage: "SetLogs <Mention Channel>",

    execute(message, args, client) {
    if(!message.guild) return;
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.clone({reason: `Purge réclamé par ${message.author.tag} (${message.author.id})`}).then(c => c.setPosition(message.channel.position) && c.send(`:boom: La purge réclamé par ${message.author} a été effectué. https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif`))
    message.channel.delete() 
    }};
