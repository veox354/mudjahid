const discord = require('discord.js')
const config = require('./../config.json')
let footer = config.footer;
if(footer.toLowerCase().includes("made by")) footer = "Made by Cabeleira"
module.exports = {
    name: "telegram",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['tele', 'gram'],
    usage: ".telegram",
	execute(message, args, client) {
        let guild = message.guild;
        let emb = new discord.MessageEmbed()
        .setTitle('**__Backup :__**')
        .setColor(config.Color)
        .addField("<:Telegram:875201922167083040> Telegram ",` ${config.Telegram}`)
        .setFooter(footer)
        message.channel.send(emb)

    }}