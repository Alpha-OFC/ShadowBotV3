const axios = require('axios')
let handler = async(m, { conn }) => {
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/porngif')
           conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}`, m)
  }
handler.help = ['porno2']
handler.tags = ['General']
handler.command = /^(porno2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
