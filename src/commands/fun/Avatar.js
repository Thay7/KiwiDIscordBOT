const Command = require('../../lib/strucutures/Command')
const { MessageEmbed } = require('discord.js')

module.exports = class Avatar extends Command {
  constructor(client) {
    super(client)
    this.name = 'avatar'
    this.aliases = ['av']
    this.category = 'utils'
  }

  async run({ channel, mentions, args, author, member }) {
    const { MessageEmbed } = require('discord.js')
    const user = args[0] ? mentions.users.first() || await this.client.users.fetch(args[0]).catch(_ => author) : author
    const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 })
  

    const embed = new MessageEmbed()

      .setDescription(`<:avatar_kiwi:748214550947561542> **Avatar de** ${user} \nClique [aqui](${avatar}) para baixar`)
      .setImage(avatar)
      .setColor('DB7093')
      .setFooter(`Autor: ${author.tag}`)
    channel.send(embed)
  }
}