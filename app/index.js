const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs')

const file = fs.readFileSync('./app/rules.md')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`)
})

client.on('guildMemberAdd', guildMember => {
  guildMember.guild.defaultChannel.sendMessage(`Bonjour <@${message.author.id}> !\n${file.toString()}`)
})

client.login(config.token)
