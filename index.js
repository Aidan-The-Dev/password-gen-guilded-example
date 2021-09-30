console.clear()

const discord = require('discord.js')
const intents = new discord.Intents(32767)
const client = new discord.Client({intents})
const {MessageEmbed} = require('discord.js')
const prefix = '-'

client.once('ready', () => {
  console.log('Ready')
})

client.on('messageCreate', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return
  if(message.content.startsWith(`${prefix}genpass`)) {
    const channelEmbed = new discord.MessageEmbed()
    .setTitle('✅ Success! ✅')
    .setColor('GREEN')
    .setDescription('Your password has successfully been generated! Please check your DMs I have sent your password there!')
    .setFooter('Password Generator')
    message.channel.send({embeds: [channelEmbed]})

    const passEmbed = new discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('Thank you for using \`GenTool\` please refer us to your friends so we can grow even more and add even more passwords!\n\nPlease click this link to see your password! https://gentool-pass.netlify.app/')

    const id = message.author.id

    client.users.fetch(id) .then(user => {
      user.send({embeds: [passEmbed]})
    })
    }
})

client.on('messageCreate', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return
    if(message.content.startsWith(`${prefix}help`)) {
      const helpEmbed = new MessageEmbed()
      .setTitle('Help Menu')
      .setColor('RANDOM')
      .setDescription(`My prefix is ${prefix}`)
      .addFields(
      {name: 'help', value: 'Returns the help menu'},
      {name: 'genpass', value: 'Generates a password for you'},
      {name: 'serverCount', value: 'Returns the bot server count'}
    )
    message.channel.send({embeds: [helpEmbed]})
  }
})

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return
    if(message.content.startsWith(`${prefix}serverCount`)) {
        const embed = new discord.MessageEmbed()
        .setTitle('Server Count')
        .setColor('RANDOM')
        .setDescription(`I am currently in ${client.guilds.cache.size} servers`)
        message.channel.send({embeds: [embed]})
    }
})

client.login(My token not yours silly)
