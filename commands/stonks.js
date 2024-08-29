const discord = require('discord.js')
const config = require('./../config.json')
const pagination = require('discord.js-pagination');
let footer = config.footer;
if (footer.toLowerCase().includes("made by")) footer = "Made by Cabeleira"

module.exports = {
    name: "stock",
    category: "sd",
    cooldown: 9000000,
    description: "sd",
    aliases: ['stonk', 'stocks', 'stonks'],
    usage: "sd",
    execute(message, args, client) {


        const fs = require('fs')
        const Adidas = __dirname + "/" + "Adidas" + ".txt";
        const crunchyroll = __dirname + "/" + "crunchyroll" + ".txt";
        const planetsushi = __dirname + "/" + "planetsushi" + ".txt";
        const adn = __dirname + "/" + "adn" + ".txt";
        const hulu = __dirname + "/" + "hulu" + ".txt";
        const nordvpn = __dirname + "/" + "nordvpn" + ".txt";
        const superu = __dirname + "/" + "superu" + ".txt";
        const auchan = __dirname + "/" + "auchan" + ".txt";
        const dualingo = __dirname + "/" + "dualingo" + ".txt";
        const cod = __dirname + "/" + "cod" + ".txt";
        const quick = __dirname + "/" + "quick" + ".txt";
        const patreon = __dirname + "/" + "patreon" + ".txt";
        const outlook = __dirname + "/" + "outlook" + ".txt";
        const pornhub = __dirname + "/" + "pornhub" + ".txt";
        const lol = __dirname + "/" + "lol" + ".txt";
        const flunch = __dirname + "/" + "flunch" + ".txt";
        const wish = __dirname + "/" + "wish" + ".txt";
        const gfuel = __dirname + "/" + "gfuel" + ".txt";
        const valorant = __dirname + "/" + "valorant" + ".txt";
        const xnxx = __dirname + "/" + "xnxx" + ".txt";
        const pubg = __dirname + "/" + "pubg" + ".txt";
        const yvesrocher = __dirname + "/" + "yvesrocher" + ".txt";
        const tfou = __dirname + "/" + "tfou" + ".txt";
        const surfeasy = __dirname + "/" + "surfeasy" + ".txt";
        const razer = __dirname + "/" + "razer" + ".txt";
        const cabe = __dirname + "/" + "cabe" + ".txt";
        const roblox = __dirname + "/" + "roblox" + ".txt";
        const lacoste = __dirname + "/" + "lacoste" + ".txt";
        const molotov = __dirname + "/" + "molotov" + ".txt";
        const easycash = __dirname + "/" + "easycash" + ".txt";
        const aromeliquide = __dirname + "/" + "aromeliquide" + ".txt";
        const mcdo = __dirname + "/" + "mcdo" + ".txt";
        const minecraft = __dirname + "/" + "minecraft" + ".txt";
        const cgr = __dirname + "/" + "cgr" + ".txt";
        const chausport = __dirname + "/" + "chausport" + ".txt";
        const venmo = __dirname + "/" + "venmo" + ".txt";
        const kinepolis = __dirname + "/" + "kinepolis" + ".txt";
        const sfrtv = __dirname + "/" + "sfrtv" + ".txt";
        const guilded = __dirname + "/" + "guilded" + ".txt";
        const onlyfans = __dirname + "/" + "onlyfans" + ".txt";
        const nba = __dirname + "/" + "nba" + ".txt";
        const netflix = __dirname + "/" + "netflix" + ".txt";
        const lemonde = __dirname + "/" + "lemonde" + ".txt";
        const gemo = __dirname + "/" + "gemo" + ".txt";
        const joueclub = __dirname + "/" + "joueclub" + ".txt";
        const disney = __dirname + "/" + "disney" + ".txt";
        const gamecash = __dirname + "/" + "gamecash" + ".txt";
        const malwarebytes = __dirname + "/" + "malwarebytes" + ".txt";
        const snapchat = __dirname + "/" + "snapchat" + ".txt";
        const free = __dirname + "/" + "free" + ".txt";
        const vide13 = __dirname + "/" + "vide13" + ".txt";
        const vide14 = __dirname + "/" + "vide14" + ".txt";
        const yoyo = __dirname + "/" + "yoyo" + ".txt";
        const yoy = __dirname + "/" + "yoy" + ".txt";
		
        // Here you put all other files too

        fs.readFile(Adidas, "utf8", (err, Adidasdata) => {
            fs.readFile(crunchyroll, "utf8", (err, crunchyrolldata) => {
                fs.readFile(planetsushi, "utf8", (err, planetsushidata) => {
                    fs.readFile(adn, "utf8", (err, adndata) => {
                        fs.readFile(hulu, "utf8", (err, huludata) => {
                            fs.readFile(nordvpn, "utf8", (err, nordvpndata) => {
                                fs.readFile(superu, "utf8", (err, superudata) => {
                                    fs.readFile(auchan, "utf8", (err, auchandata) => {
                                        fs.readFile(dualingo, "utf8", (err, dualingodata) => {
                                            fs.readFile(cod, "utf8", (err, coddata) => {
                                                fs.readFile(quick, "utf8", (err, quickdata) => {
                                                  fs.readFile(patreon, "utf8", (err, patreondata) => {
                                                    fs.readFile(outlook, "utf8", (err, outlookdata) => {
                                                        fs.readFile(pornhub, "utf8", (err, pornhubdata) => {
                                                            fs.readFile(lol, "utf8", (err, loldata) => {
                                                                fs.readFile(flunch, "utf8", (err, flunchdata) => {
                                                                    fs.readFile(wish, "utf8", (err, wishdata) => {
                                                                        fs.readFile(gfuel, "utf8", (err, gfueldata) => {
                                                                            fs.readFile(valorant, "utf8", (err, valorantdata) => {
                                                                                fs.readFile(xnxx, "utf8", (err, xnxxdata) => {
                                                                                    fs.readFile(pubg, "utf8", (err, pubgdata) => {
                                                                                        fs.readFile(yvesrocher, "utf8", (err, yvesrocherdata) => {
                                                                                            fs.readFile(tfou, "utf8", (err, tfoudata) => {
                                                                                                fs.readFile(surfeasy, "utf8", (err, surfeasydata) => {
                                                                                                    fs.readFile(razer, "utf8", (err, razerdata) => {
                                                                                                        fs.readFile(cabe, "utf8", (err, cabedata) => {
                                                                                                            fs.readFile(roblox, "utf8", (err, robloxdata) => {
                                                                                                                fs.readFile(lacoste, "utf8", (err, lacostedata) => {
                                                                                                                    fs.readFile(molotov, "utf8", (err, molotovdata) => {
                                                                                                                        fs.readFile(easycash, "utf8", (err, easycashdata) => {
                                                                                                                            fs.readFile(aromeliquide, "utf8", (err, aromeliquidedata) => {
                                                                                                                                fs.readFile(mcdo, "utf8", (err, mcdodata) => {
                                                                                                                                    fs.readFile(minecraft, "utf8", (err, minecraftdata) => {
                                                                                                                                        fs.readFile(cgr, "utf8", (err, cgrdata) => {
                                                                                                                                            fs.readFile(chausport, "utf8", (err, chausportdata) => {
                                                                                                                                                fs.readFile(venmo, "utf8", (err, venmodata) => {
                                                                                                                                                    fs.readFile(kinepolis, "utf8", (err, kinepolisdata) => {
                                                                                                                                                        fs.readFile(sfrtv, "utf8", (err, sfrtvdata) => {
                                                                                                                                                          fs.readFile(guilded, "utf8", (err, guildeddata) => {
                                                                                                                                                            fs.readFile(onlyfans, "utf8", (err, onlyfansdata) => {
                                                                                                                                                                fs.readFile(nba, "utf8", (err, nbadata) => {
                                                                                                                                                                    fs.readFile(netflix, "utf8", (err, netflixdata) => {
                                                                                                                                                                        fs.readFile(lemonde, "utf8", (err, lemondedata) => {
                                                                                                                                                                            fs.readFile(gemo, "utf8", (err, gemodata) => {
                                                                                                                                                                                fs.readFile(joueclub, "utf8", (err, joueclubdata) => {
                                                                                                                                                                                    fs.readFile(disney, "utf8", (err, disneydata) => {
                                                                                                                                                                                        fs.readFile(gamecash, "utf8", (err, gamecashdata) => {
                                                                                                                                                                                            fs.readFile(malwarebytes, "utf8", (err, malwarebytesdata) => {
                                                                                                                                                                                                fs.readFile(snapchat, "utf8", (err, snapchatdata) => {
                                                                                                                                                                                                    fs.readFile(free, "utf8", (err, freedata) => {
                                                                                                                                                                                                        fs.readFile(vide13, "utf8", (err, vide13data) => {
                                                                                                                                                                                                            fs.readFile(vide14, "utf8", (err, vide14data) => {
                                                                                                                                                                                                                fs.readFile(yoyo, "utf8", (err, yoyodata) => {
                                                                                                                                                                                                                    fs.readFile(yoy, "utf8", (err, yoydata) => {

                                // here you read 
                                let Adidasstock = Adidasdata.split('\n').length - 1
                                let crunchyrollstock = crunchyrolldata.split('\n').length - 1
                                let planetsushistock = planetsushidata.split('\n').length - 1
                                let adnstock = adndata.split('\n').length - 1
                                let hulustock = huludata.split('\n').length - 1
                                let nordvpnstock = nordvpndata.split('\n').length - 1
                                let superustock = superudata.split('\n').length - 1
                                let auchanstock = auchandata.split('\n').length - 1
                                let dualingostock = dualingodata.split('\n').length - 1
                                let codstock = coddata.split('\n').length - 1
                                let quickstock = quickdata.split('\n').length - 1
                                let patreonstock = patreondata.split('\n').length - 1
                                let outlookstock = outlookdata.split('\n').length - 1
                                let pornhubstock = pornhubdata.split('\n').length - 1
                                let lolstock = loldata.split('\n').length - 1
                                let flunchstock = flunchdata.split('\n').length - 1
                                let wishstock = wishdata.split('\n').length - 1
                                let gfuelstock = gfueldata.split('\n').length - 1
                                let valorantstock = valorantdata.split('\n').length - 1
                                let xnxxstock = xnxxdata.split('\n').length - 1
                                let pubgstock = pubgdata.split('\n').length - 1
                                let yvesrocherstock = yvesrocherdata.split('\n').length - 1
                                let tfoustock = tfoudata.split('\n').length - 1
                                let surfeasystock = surfeasydata.split('\n').length - 1
                                let razerstock = razerdata.split('\n').length - 1
                                let cabestock = cabedata.split('\n').length - 1
                                let robloxstock = robloxdata.split('\n').length - 1
                                let lacostestock = lacostedata.split('\n').length - 1
                                let molotovstock = molotovdata.split('\n').length - 1
                                let easycashstock = easycashdata.split('\n').length - 1
                                let aromeliquidestock = aromeliquidedata.split('\n').length - 1
                                let mcdostock = mcdodata.split('\n').length - 1
                                let minecraftstock = minecraftdata.split('\n').length - 1
                                let cgrstock = cgrdata.split('\n').length - 1
                                let chausportstock = chausportdata.split('\n').length - 1
                                let venmostock = venmodata.split('\n').length - 1
                                let kinepolisstock = kinepolisdata.split('\n').length - 1
                                let sfrtvstock = sfrtvdata.split('\n').length - 1
                                let guildedstock = guildeddata.split('\n').length - 1
                                let onlyfansstock = onlyfansdata.split('\n').length - 1
                                let nbastock = nbadata.split('\n').length - 1
                                let netflixstock = netflixdata.split('\n').length - 1
                                let lemondestock = lemondedata.split('\n').length - 1
                                let gemostock = gemodata.split('\n').length - 1
                                let joueclubstock = joueclubdata.split('\n').length - 1
                                let disneystock = disneydata.split('\n').length - 1
                                let gamecashstock = gamecashdata.split('\n').length - 1
                                let malwarebytesstock = malwarebytesdata.split('\n').length - 1
                                let snapchatstock = snapchatdata.split('\n').length - 1
                                let freestock = freedata.split('\n').length - 1
                                let vide13stock = vide13data.split('\n').length - 1
                                let vide14stock = vide14data.split('\n').length - 1
                                let yoyostock = yoyodata.split('\n').length - 1
                                let yoystock = yoydata.split('\n').length - 1

                                //Here you show stock|
                                const stock = new discord.MessageEmbed()
                                .setTitle("Stock`🛠️`")
                                .setColor(8519796)
                                .addField('<:Molotov:869862047683342337> Go Rejoindre le serveur principal', 'discord.gg/dorksgen')
                                .setImage("https://media.discordapp.net/attachments/877736580972945408/877973583106801714/DorksGenPP.gif")
                        
                                const stock1 = new discord.MessageEmbed()
                                .setTitle('Stock :')
                                    .setColor(config.Color)
                                    .addField('<:adidas:875142719075418143> Adidas', Adidasstock, true)
                                    .addField('<:crunchy:875142732664938568> Crunchyroll', crunchyrollstock, true)
                                    .addField('<:planetesushi:875471482699010098> PlanetSushi', planetsushistock, true)
                                    .addField('<:adn:875142721180946523> Adn', adnstock, true)
                                    .addField('<:Hulu:875472032513531994> Hulu', hulustock, true)
                                    .addField('<:nordvpn:875142754613747794> NordVPN', nordvpnstock, true)
                                    .addField('<:SuperU:875472388249227274> SuperU', superustock, true)
                                    .addField('<:Auchan:875472693078675466> Auchan', auchanstock, true)
                                    .addField('<:Duolingo:875473076329021470> Dualingo', dualingostock, true)
                                    .addField('<:cod:875473822072074312> COD', codstock, true)
                                    .addField('<:Quick:875474361954496552> Quick', quickstock, true)
                                    .addField('<:Patreon:875475065171480636> Patreon', patreonstock, true)
                                    .addField('<:Outlook:875475256716959744> outlook', outlookstock, true)
                                    .addField('<:ph:875142718177820704> Pornhub', pornhubstock, true)
                                    .addField('<:lol:875475816631373825> LoL', lolstock, true)
                                    .addField('<:Flunch:875476155132678144> Flunch', flunchstock, true)
                                    .addField('<:wish:875142715619291256> Wish', wishstock, true)
                                    .addField('<:gfuel:875476542564761661> Gfuel', gfuelstock, true)
                                    .addField('<:valorant:875476811688067173> Valorant', valorantstock, true)
                                    .addField('<:xnxx:875477109060038706> Xnxx', xnxxstock, true)
                                    .addField('<:pubg:875477416213094410> PUBG', pubgstock, true)
                                    .addField('<:Yve:875477716609163264> yvesrocher', yvesrocherstock, true)
                                    .addField('<:Tfoulogo0:875478203114881105> TFOU', tfoustock, true)
                                    .addField('<:SurfEasy:875478724512989184> SurfEasy', surfeasystock, true)
                                    .addField('<:Razer:875478933934583848> Razer', razerstock, true)
                                    .addField('je suce cabe', cabestock, true)
                                    .addField('Roblox', robloxstock, true)
                                    .setFooter(footer)
                                    .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")
                        
                                const stock2 = new discord.MessageEmbed()
                                .setTitle('Stock :')
                                    .setColor(config.Color)
                                    .addField('<:lacoste:875480246412017694> Lacoste', lacostestock, true)
                                    .addField('<:Molotov:875480427597545482> molotov', molotovstock, true)
                                    .addField('<:easycash:875480755768279130> easycash', easycashstock, true)
                                    .addField('<:liquide:875481217233997874> aromeliquide', aromeliquidestock, true)
                                    .addField('<:McDonalds:875481399493267526> mcdo', mcdostock, true)
                                    .addField('<:Mc:875481568406278236> minecraft', minecraftstock, true)
                                    .addField('<:CGR:875481771767119952> cgr', cgrstock, true)
                                    .addField('<:chausport:875482070938435674> chausport', chausportstock, true)
                                    .addField('<:Venmo:875482265285689374> venmo', venmostock, true)
                                    .addField('<:kinepolis:875482539593187429> kinepolis', kinepolisstock, true)
                                    .addField('<:sfrtv:875482716093681724> sfrtv', sfrtvstock, true)
                                    .addField('<:guilded:876436521752883240> guilded', guildedstock, true)
                                    .addField('<:onlyfans:876447458899685405> onlyfans', onlyfansstock, true)
                                    .addField('<:NBA:876456392591020062> nba', nbastock, true)
                                    .addField('<:Netflix:876506159337578526> netflix', netflixstock, true)
                                    .addField('<:lemonde:876772770229399572> lemonde', lemondestock, true)
                                    .addField('<:gemo:876773610382053376> gemo', gemostock, true)
                                    .addField('<:joueclub:876774476287725628> joueclub', joueclubstock, true)
                                    .addField('<:Disney:876775544870539304> disney', disneystock, true)
                                    .addField('<:gcash:876784087635992616> gamecash', gamecashstock, true)
                                    .addField('<:Malwarebytes:876813588919095347> malwarebytes', malwarebytesstock, true)
                                    .addField('<:snapchat:876876289619943514> snapchat', snapchatstock, true)
                                    .addField('<:free:876876316127936594> free', freestock, true)
                                    .addField('vide13', vide13stock, true)
                                    .addField('vide14', vide14stock, true)
                                    .addField('yoyo', yoyostock, true)
                                    .addField('yoy', yoystock, true)
                                    .setFooter(footer)
                                    .setImage("https://media.discordapp.net/attachments/858631456956219392/875479511364415539/standard.gif")
                                const pages = [
                                    stock,
                                    stock1,
                                    stock2
                            ]
                            
                            const emojiList = ["⏪", "⏩"];
                            
                            const timeout = '120000';
                            
                            pagination(message, pages, emojiList, timeout)
                            })
                        })
                    })
                })
            })
        })
    })
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})                   
})
})
})              
            
        
    
                    
                
            
        
   


        // Here are we closing the read stream. After every file you just close the read stream.
    }
}
