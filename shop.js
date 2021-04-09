const profileModel = require("profileSchema");
const config = require("config");
const db = require("database");

module.exports = {
name: "shop",
  aliases: [],
  cooldown: 3,
  permissions: [],
  temporary: false,
  guildOnly: true,
  ownerOnly: false,
  status: "enabled",
  args: 0,
  usage: "shop",
  description: "Check out the shop!",
  execute(client, message, args, cmd, Discord, profileData) {
    let mine_e = profileData.mine
    if (mine_e === 0) mine_e = "Do not own any";
    
    let hunt_e = profileData.hunting-rifle
    if (hunt_e === 0) hunt_e = "Do not own any";
    
    let cheese_e = profileData.cheese
    if (cheese_e === 0) cheese_e = "Do not own any";
    
    if (args[0] === "mine") {
    var embed_mine = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true })
    .setTitle(`Mine (${mine_e})`)
    .setDescription(db.minedescription)
    .setColor(config.embedColor)
    .setTimestamp()
    .setImage(config.mineImage);
               message.channel.send(embed_mine);
    };
    
     if (args[0] === "hunting rifle") {
     var embed_hunt = new Discord.MessageEmbed()
     .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true })
     .setTitle(`Hunting Rifle (${hunt_e})`)
     .setDescription(db.hunting-rifle-description)
     .setColor(config.embedColor)
     .setTimestamp()
     .setImage(config.huntImage);
                message.channel.send(embed_hunt);
    };
    
     if (args[0] === "cheese") {
     var embed_cheese = new Discord.MessageEmbed()
     .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true })
     .setTitle(`Cheese (${cheese_e})`)
     .setDescription(db.cheese-description)
     .setColor(config.embedColor)
     .setTimestamp()
     .setImage(config.cheeseImage);
                message.channel.send(embed_cheese);
     };
    
    var embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true })
    .setTitle(`Shop`)
    .setDescription(`Mine \nPrize: ${db.mine}`)
    .addField(`Hunting Rifle`, `Prize: ${db.hunting_rifle}`, false)
    .addField(`Cheese`, `Prize: ${db.cheese}`, false);
               message.channel.send(embed);
    
    else return message.reply(`That's not a valid item in the shop lol`);
  };
}
