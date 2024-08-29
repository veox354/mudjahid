const discord = require('discord.js')
const cnfig = require('./../config.json')
const pagination = require('discord.js-pagination');
const prefix = cnfig.prefix
let footer = cnfig.footer;

module.exports = {
    name: "help",
    category: "config",
    cooldown: 5,
    description: "Set Logs Channel!",
    aliases: ['help', 'wat'],
    usage: "SetLogs <Mention Channel>",
	execute(message, args, client) {
        if (message.author.bot) return;

       
        const help = new discord.MessageEmbed()
         .setTitle("Help `🛠️`")
         .setColor(8519796)
         .setDescription(`\`🖐\` • Hey salut ** ${message.author.username}**\n\`📥\` • Je suis acctuellement sur **${client.guilds.cache.size}** serveur(s)\n\`👥\` • Plus de **${client.users.cache.size}** membres\n\`✏️\` • Plus de **${client.channels.cache.size}** salons\n\`⚙️\` • Version : **1.0**\n\`🔸\` • Mon préfix sur ce serveur : **.**\n\`📚\` • Commandes : **${client.commands.size}**\n\`💻\` • Développeurs : <@780112519347830785> <@831592225292156948>`)
         .setImage(message.guild.iconURL())
 
         const cmd = new discord.MessageEmbed()
         .setTitle("Help `🛠️`")
         .setColor(8519796)
         .addField("`🏹` • `.gen NomDuService`" , `- Générer un compte de ce service.`)
         .addField("`👁️` • `.eval`" , `- Set Logs Channel!`)
         .addField("`🔎` • `.stock`" , `- Vérifier les services et les comptes.`)
         .addField("`🔑` • `.restock `" , `- Ajoutez ce compte au service`)
         .addField("`🔊` • `.vc`","- Compteur des membres en vocal en direct." )
         .addField("`🔱` • `.membercount`","- Affiche le nombre de personnes sur  le server . " )
         .addField("`🌋` • `.nuke`","- Duplique le salon et supprime l'ancien." )
         .addField("`💥` • `.ticket`","- permet de cree un ticket ." )
         .addField("`🗼` • `.unstock`" , `- Tu sait lire ?.`)
         .addField("`🔓` • `.unlock`" , `- Débloque le salon.`)
         .addField("`🔒` • `.lock`" , `- Bloque le salon.`)
 
         const fun = new discord.MessageEmbed()
         .setTitle("Help `🛠️`")
         .setColor(8519796)
         .addField("`👄` • `.timeleft`" , `- Regarde le temps qu'il te reste pour générer un autre compte.`)
         .addField("`🗼` • `.Ping`" , `- Affiche la latence du bot.`)
         .addField("`🤑` • `.buy`" , `- Pour avoir les mode de paiements.`)
         .addField("`👻` • `.telegram`" , `- Pour avoir le Telegram.`)
 
         const pages = [
             help,
             cmd,
             fun
     ]
     
     const emojiList = ["⏪", "⏩"];
     
     const timeout = '120000';
     
     pagination(message, pages, emojiList, timeout)
    }};
    