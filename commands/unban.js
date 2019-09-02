const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
      if(message.member.roles.some(r=>["Owner", "Co-Owner", "Manager"].includes(r.name)) ) {
        
        let user = message.mentions.members.first() || message.guild.members.get(args[0]) || args[0];
        if(!user) return message.channel.send("Please supply a user to unban.");
        
        message.guild.fetchBans()
        .then(bans => {
             message.channel.send(user.id);    
        });
   } else {
        return message.channel.send("You don't have permission to use this command!");
   }      
}

module.exports.config = {
  name: "unban",
  aliases: ["unbanid"],
  usage: "u.unban",
  description: "Unbans ID",
  //noalias: "No Aliases",
  accessableby: "Staff"
}
