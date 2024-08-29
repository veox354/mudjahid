const discord = require('discord.js'), fs = require('fs')
module.exports = {
    name: "unstock",
    category: "sd",
    cooldown: 0,
    description: "sd",
    aliases: ['destock', 'removestock', 'removestonks'],
    usage: "sd",
    execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Nah you cant do that!')
        let stonks = args[0]
        if (!stonks) return message.channel.send('Which type i have to delete...')
        const restockable = __dirname + "/" + stonks + ".txt";
        fs.writeFile(restockable, ``, err => {
            if (err) return message.channel.send("Failed to delete the **__" + args[0].toUpperCase() + "__**. Please make sure that the file exists.")
            if (!err) return message.channel.send(` <a:check:875142764906577940>  | Deleted file for **__${args[0].toUpperCase()}__**`)

        })

    }

}