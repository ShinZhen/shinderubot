const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready' , function() {
    bot.user.setGame("Command: *help");
    console.log("Connected");
});

bot.login("NTMwODE5NTI3NjY4MjY5MDY2.DxE8fw.uJbMBjGLIo4HW4sqfaowpnQzGqQ");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage('Liste des commandes: \n -*help')
    }

    if (message.content === "Salut"){
        message.reply("Bien Le bonjour. :)")
        console.log("Commande Salut effectué");
    }
});
