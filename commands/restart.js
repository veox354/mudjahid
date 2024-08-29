
const config = require('./../config.json');
module.exports = {
    name: 'restart',
    description: 'Rédémarre le bot',
    owner: true,
    cat: 'owner',

    execute(message, args) {
        let bot = message.client;
        message.channel.send(` <a:Chargement:875157826497040395> Rédémarage de \`${message.client.user.tag}\` en cours....`).then(() => bot.destroy()).then(() => bot.login(config.botToken)).then(() => message.channel.send(`${emoji.succes} Le bot a redémarré avec succès https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif`))


    },
};