let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*NeKotine BOT*\n*https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods*', '©NeKotine - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(muslitos)$/i
handler.admin = true
module.exports = handler
