global.DeveloperMode = 'false' //true Or false
global.linkGC = ['No-Disponible' , 'No-Disponible' , 'No-Disponible' , 'No-Disponible' , 'No-Disponible'] // No tiene utilidad 
global.channelYT = ['https://vm.tiktok.com/ZMLNSV3YV/'] // No tiene utilidad
global.owner = ['+34623442554' , '+34623442554'] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot
global.mods = ['+34623442554' , '+34623442554'] // No tiene utilidad
global.prems = ['+34623442554' , '+34623442554'] // No tiene utilidad

// Nota: Puedes contactarme si necesitas ayuda con algo al +34623442554 (este es mi numero personal/real bloqueo personas que no sean temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +34623442554 o al +34623442554
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos 
// - Siganme en TikTok para apoyarme en futuras actualizaciones del bot https://vm.tiktok.com/ZMLNSV3YV/

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'DyotaMC05',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'rey2k21'
}

// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = 'NeKotine - Bot'


//global.wait = '*Esperé un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
