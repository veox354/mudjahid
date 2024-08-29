const config = require('./../config.json')
const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
const { rawListeners } = require('process')
let footer = config.footer;
if(footer.toLowerCase().includes("made by")) footer = "Made by Cabeleira"
module.exports = {
  name: "gen",
  category: "generate",
  cooldown: 300000,
  description: "Tu dois attendre 5 minutes après génération afin de regénérer!",
  aliases: ['get', 'generator'],
  usage: "SetLogs <Mention Channel>",
  execute(message, args, client) {

    let roleEmbed = new Discord.MessageEmbed()
      .setColor(config.Color)
      .setTitle('Error ' + config.ErrorEmoji)
      .setDescription(`Tu dois avoir le rôle: <@&${config.GenRole}>`)
      .setFooter(footer)
      .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")


    if(!message.member.roles.cache.has(config.GenRole)) return message.channel.send(roleEmbed)

    let wrongEmbed = new Discord.MessageEmbed()
      .setColor(config.Color)
      .setDescription(`${config.ErrorEmoji} **MAUVAIS SALON!** La commande peux être utilisé uniquement dans <#${config.GenChannelID}> - ${message.author}`)
      .setFooter(footer)
      .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")

    if (message.channel.id != config.GenChannelID) return message.reply(wrongEmbed)
    let user = message.author;
    let timeout = config.GenCooldown;
    let author = db.get(`ae_${message.author.id}_${user.id}`);
    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));


      const cooldown = new Discord.MessageEmbed()
        .setTitle('Error ' + config.ErrorEmoji)
        .setDescription(`Attention tu Gen trop vite attend encore **${time.minutes}m et ${time.seconds}s** pour pouvoir gen !`)
        .setColor(config.Color)
        .setFooter(footer)
        .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")

      return message.reply(cooldown)

    } else {      
      let type = new Discord.MessageEmbed()
        .setTitle("Error " + config.ErrorEmoji)
        .setDescription("Precise le nom du service que tu veut génerer.\n\nExemple: `"+ config.prefix + "gen pornhub`")
        .setColor(config.Color)
        .setFooter(footer)
        .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")

      var fs = require("fs");
      if(!args[0]) return message.channel.send(type)
      const filePath = __dirname + "/" + args[0] + ".txt";
      fs.readFile(filePath, function (err, data) {
        if (!err) {
          data = data.toString();
          var position = data.toString().indexOf("\n");
          let firstLine = data.split("\n")[0];
          if (firstLine === "\n") first = "Une erreur s'est produite lors de la création de votre compte! Veuillez signaler ce problème dans un ticket!"
          const rEmbed = new Discord.MessageEmbed()
            .setTitle(`Votre compte **` + '`' + args + "`" + "** vous a été envoyé en tant que message privé !")
            .setFooter(footer)
            .setColor("#2cff00")
            .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")

          const embed = new Discord.MessageEmbed()
            .setTitle(`Voici ton compte **__` + args + `__** de ${message.guild.name}`)
            .setDescription(` ` + firstLine)
            .setColor(config.Color)
            .setTimestamp()
            .setFooter(footer)
            .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")


          if (position != -1) {
            let amount = 1
            data = data.substr(position + 1);
            fs.writeFile(filePath, data, function (err) {

              db.set(`ae_${message.author.id}_${user.id}`, Date.now())

              message.author.send(embed).catch(err => {
                if (err) {
                  return message.channel.send(`${config.ErrorEmoji} | Tes message privées sont desactivées, je ne peux pas t'envoyer de message. (ignore the other messages.)`)
                }
              })
              message.channel.send(`${message.author}`)
              message.channel.send(rEmbed)
            })
          } else {
            const nostockEmbed = new Discord.MessageEmbed()
              .setTitle(`Error ${config.ErrorEmoji} | Out of stock`)
              .setDescription("Il n'y a pas de comptes pour **" + args + "** Verifiez bien le stock !")
              .setColor(config.Color)
              .setFooter(footer)
              .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")

            message.reply(nostockEmbed);
          }
        } else {
          const accEmbed = new Discord.MessageEmbed()
            .setDescription("Cette catégorie n'existe pas, verifiez bien le stock !")
            .setColor(config.Color)
            .setFooter(footer)
            .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")


          message.reply(accEmbed);
        }
      })
    }
  }
}

