
const db = require('quick.db'), ms = require('parse-ms')
const discord = require('discord.js'), Discord = require('discord.js')
const config = require('./../config.json')
let footer = config.footer;
if(footer.toLowerCase().includes("made by")) footer = "Made by Cabeleira"

module.exports = {
  name: "timeleft",
  category: "sd",
  cooldown: 0,
  description: "sd",
  aliases: ['cooldown', 'cooldowns', 'timeover'],
  usage: "sd",
  execute(message, args, client) {
    let user = message.author;
    let timeout = config.GenCooldown;
    let author = db.get(`ae_${message.author.id}_${user.id}`);

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));


      const cooldown = new Discord.MessageEmbed()
        .setTitle('Time Left')
        .setDescription(`You have to wait **${time.minutes}m and ${time.seconds}s** until you can get a new account (again)!`)
        .setColor(config.Color)
        .setFooter(footer)
        .setImage(config.Banner)

      return message.reply(cooldown)

    } else {
      const cooldowns = new Discord.MessageEmbed()
        .setTitle('No Time-Left')
        .setDescription(`Feel free to generate another account! You don't have cooldown.`)
        .setColor(config.Color)
        .setFooter(footer)
        .setImage(config.Banner)
      message.channel.send(cooldowns)
    }
  }
}