const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs')

const file = fs.readFileSync('./app/rules.md')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`)
})

client.on('guildMemberAdd', guildMember => {
  guildMember.guild.channels.get(config.channelId).sendMessage(`Bonjour <@${guildMember.user.id}> !\n${file.toString()}`)
  .catch(err => console.log(err))
})

client.login(config.token)
