const config = require('./../config.json')
module.exports = {
    name: "eval",
    category: "duties",
    cooldown: 0,
    description: "Set Logs Channel!",
    aliases: ['evaluate', 'evals'],
    usage: "SetLogs <Mention Channel>",
    execute(message, args, client) {
        if (message.author.id != config.ownerID) return;
        const clean = (txt) => {
            if (typeof (txt) === "string") return txt.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            return txt;
        };
        const content = message.content.split(" ").slice(1).join(" ");
        const result = new Promise((resolve, reject) => resolve(eval(content)));

        return result.then((output) => {
            if (typeof output !== "string") {
                output = require("util").inspect(output, { depth: 0 });
            }
            if (output.includes(message.client.token)) {
                output = output.replace(message.client.token, "T0K3N");
            }
            message.channel.send(output, {
                code: "js"
            });
        }).catch((err) => {
            err = err.toString();
            if (err.includes(message.client.token)) {
                err = err.replace(message.client.token, "T0K3N");
            }
            message.channel.send(err, {
                code: "js"
            });
        })

    }
}
