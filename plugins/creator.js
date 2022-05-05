function handler(m) {
  /*const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)*/
  
  m.reply(`
*≡ OWNER*


▢ WhatsApp :
  • wa.me/573125484672

`) 


}

handler.help = ['Creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
