const discord = require('discord.js')
const config = require('./../config.json')
let footer = config.footer;
if(footer.toLowerCase().includes("made by")) footer = "Made by Cabeleira"
module.exports = {
    name: "membercount",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['members', 'memberscount'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {
        let guild = message.guild;
        let membercount = guild.memberCount;
        let emb = new discord.MessageEmbed()
        .setTitle('Members')
        .setDescription(membercount)
        .setColor(config.Color)
        .setFooter(footer)
        .setImage(config.Banner)
        message.channel.send(emb)

    }}