const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
client.login(config.BOT_TOKEN);

client.on("message", function(message) {
    if (message.author.bot) return;
const response = (cmnd, res) => {
    if (message.content.toLowerCase().includes(cmnd)){
        message.channel.send(res);
    }
}
const streamStart = (cmnd) => {
    const streamChannel = client.channels.cache.find( channel => channel.id === "806939015621378150")
    if (message.content == cmnd && message.author.id === "162255039619006464" || message.content == cmnd && message.author.id == "254067659476303872" ){
        streamChannel.send(`@everyone :heart: LIVE NOW :heart: https://twitch.tv/beauty`);
    }
}
// change channel id to neeks and change the emotes
const newsReact = () => {
    if (message.channel.id === "806941308517482516"){
        findEmotes("Joey")
        findEmotes("neek")
        findEmotes("dyson")
        findEmotes("lul")
        findEmotes("uwu")
        findEmotes("clam")
    }

}
/// this is neeks art channel id just add the right emotes
const artReact = () => {
    if (message.channel.id === "481191473585586177") {
        findEmotes()
        //add the emotes she wants
    }
}
// neeks social channel id just add the right emotes
const socialReact = () => {
    if (message.channel.id === "748388318676254721"){
        findEmotes()
    }
}
const findEmotes = (emote) => {
  let emotefind =  message.guild.emojis.cache.find(
        (emoji) => emoji.name === emote
    )
    message.react(emotefind)
}

socialReact();
artReact();
newsReact();
response();
streamStart("!stream")



});



