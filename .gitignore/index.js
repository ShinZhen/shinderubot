const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready' , function() {
    bot.user.setGame("Command: *help");
    console.log("Connected");
});

if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
        prefixe : process.env.prefix
    };
}
bot.login("process.env.TOKEN");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage('Liste des commandes: \n -*help')
    }

    if (message.content === "shinderubot"){
        message.reply("Createur du bot ShinZhen")
        console.log("Commande effectué");
    }

    if (message.content === prefix + "embed"){
     var embed = new Discord.RichEmbed()
        .setTitle("EMBED")
        .setDescription("Ceci est un embed")
        .addField(".help","Page d'aide", true)
        .addField("Embed01","Embed 01 ! :) Suivez L'instagram de Shinzhen (https://www.instagram.com/shinzhen4/?hl=fr", true)
        .setColor("0x58FA58")
        .setFooter("Bon Moment Parmis nous ! :)")
        message.channel.sendEmbed(embed)
    }
         
});

