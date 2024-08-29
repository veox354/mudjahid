const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()


client.on('message', async message => {
  if (!message.guild) return;

  if (message.content.startsWith(`${prefix}t-role`) || message.content.startsWith(`${prefix}role`)) {
    const role = message.mentions.roles.first()

    ticket.setRole(message, role) //Set the support role, that gets pinged when a new ticket is created!
  }
  if (message.content.toLowerCase().startsWith(`${prefix}ticket`) || message.content.toLowerCase().startsWith(`${prefix}new`)) {
    const reason = message.content.slice(7)

    ticket.makeTicket(message, reason, "swrf")//Creates a new ticket, the reason is optional!
  }
  if (message.content.toLowerCase().startsWith(`${prefix}close`)) {
    const args = message.content.slice(6)
    const channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.id == args || c.name == args) || message.channel

    ticket.closeTicket(message, channel)
  }
  if (message.content.startsWith(`${prefix}embed-message`)) {
    const args = message.content.slice(14)

    ticket.editEmbed(message, args)
  }
})

