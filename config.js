// S C R I P T  O R I  B Y  @BochilGaming 🔭

// M A D E  B Y  Letta - Sama 🐰  

// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -

// • Allah SWT

// • Nurutomo

// • Bochilgaming

// • Rominaru

// • Kannachann

// • The.Sad.Boy01

// • Rasel comel

// • Xtreshe (Beban)

// • Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'

import chalk from 'chalk'

import { fileURLToPath } from 'url'

import moment from 'moment-timezone'

/*============= WAKTU =============*/

let wibh = moment.tz('Asia/Jakarta').format('HH')

    let wibm = moment.tz('Asia/Jakarta').format('mm')

    let wibs = moment.tz('Asia/Jakarta').format('ss')

    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

    

    let d = new Date(new Date + 3600000)

    let locale = 'id'

    // d.getTimeZoneOffset()

    // Offset -420 is 18.00

    // Offset    0 is  0.00

    // Offset  420 is  7.00

    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let week = d.toLocaleDateString(locale, { weekday: 'long' })

    let date = d.toLocaleDateString(locale, {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    })

      

    

/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v

global.sig = 'https://instagram.com/itsme_nitsu'

global.sgh = 'http://github.com/JakaV4'

global.sgc = 'https://chat.whatsapp.com/ED7th5Ie38eBayZEbDPxwY'

global.sdc = 'https://instagram.com/itsme_nitsu'

global.snh = 'https://nhentai.net/g/365296/'

/*============== PAYMENT ==============*/

global.pdana = '081335334848'

global.povo = '-'

global.pgopay = '085785694474'

global.ppulsa = '081335334848'

global.ppulsa2 = '081335334848'

global.psaweria = '-'

/*============== NOMOR ==============*/

global.nomorbot = '79111309292'

global.nomorown = '6285785694474'

global.namebot = 'VīoLaꪶ͢Botzꫂ⁩'

global.nameown = 'ζλκλꪶ͢Kunꫂ⁩'

/*============== STAFF ==============*/

global.owner = [

  ['6285785694474'],

  ['6285785694474'],

  ['6285785694474'],

  ['6285785694474', 'LETTA ! 🐰', true]

  // [number, dia creator/owner?, dia developer?]

] // Put your number here

global.mods = [] // Want some help?

global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10

/*============== API ==============*/

global.APIs = { // API Prefix

  // name: 'https://website'

  nrtm: 'https://nurutomo.herokuapp.com',

  rey: 'https://server-api-rey.herokuapp.com',

  xteam: 'https://api.xteam.xyz',

  zahir: 'https://zahirr-web.herokuapp.com',

  lol: 'https://api.lolhuman.xyz',

  dhnjing: 'https://dhnjing.xyz',

  neoxr: 'https://neoxr-api.herokuapp.com',

  zeks: 'https://api.zeks.me',

  pencarikode: 'https://pencarikode.xyz',

  ana: 'https://anabotofc.herokuapp.com/',

  amel: 'https://melcanz.com',

  hardianto: 'https://hardianto.xyz',

  botstyle: 'https://botstyle-api.herokuapp.com',

  adiisus: 'https://adiixyzapi.herokuapp.com',

  LeysCoder: 'https://leyscoders-api.herokuapp.com',

  kanx: 'https://kannxapi.herokuapp.com/'

}

global.APIKeys = { // APIKey Here

  // 'https://website': 'apikey'

  'https://api.xteam.xyz': 'APIKEY',

  'https://anabotofc.herokuapp.com/': 'APIKEY',

  'https://api.lolhuman.xyz': 'APIKEY',

  'https://zahirr-web.herokuapp.com': 'zahirgans',

  'https://api.zeks.me': 'apivinz',

  'https://pencarikode.xyz': 'pais',

  'https://melcanz.com': 'APIKEY',

  'https://neoxr-api.herokuapp.com': 'yntkts',

  'https://server-api-rey.herokuapp.com': 'apirey',

  'https://botstyle-api.herokuapp.com': 'APIKEY',

  'https://hardianto.xyz': 'hardianto',

  'https://leyscoders-api.herokuapp.com': 'dappakntlll'

}

// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/

//GANTI SETERAH MU

global.wm = '                「 VīoLaꪶ͢Botzꫂ⁩ あ⁩ 」' //Main Watermark

global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘VīoLaꪶ͢Chanꫂ⁩˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'

global.wm3 = '⫹⫺ VīoLaꪶ͢Botzꫂ⁩'

global.botdate = `⫹⫺ 𝗗𝗮𝘁𝗲: ${week} ${date}`

global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`

global.titlebot = '🌱 ┊ 𝗥𝗣𝗚 Whatsapp ʙᴏᴛ'

global.author = '                「 VīoLaꪶ͢Botzꫂ⁩ あ⁩ 」'

/*============== LOGO ==============*/

// INI JUGA GANTI SETERAH MU

global.thumb = 'https://telegra.ph/file/d4e18fd845a368ab401a6.jpg' //Main Thumbnail

global.thumb2 = 'https://telegra.ph/file/d4e18fd845a368ab401a6.jpg'

global.thumbbc = 'https://telegra.ph/file/d4e18fd845a368ab401a6.jpg' //For broadcast

global.giflogo = 'https://telegra.ph/file/d4e18fd845a368ab401a6.jpg'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/

global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'

global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/

global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'

global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

global.dpdf = 'application/pdf'

global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/

global.fsizedoc = '99999999999999' // default 9999TB

global.fpagedoc = '99999'

/*=========== HIASAN ===========*/

// DEFAULT MENU

global.dmenut = '❏═┅═━–〈' //top

global.dmenub = '┊•' //body

global.dmenub2 = '┊' //body for info cmd on Default menu

global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU

global.dashmenu = '┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅'

global.cmenut = '❏––––––『'                       //top

global.cmenuh = '』––––––'                        //header

global.cmenub = '┊✦ '                            //body

global.cmenuf = '┗━═┅═━––––––๑\n'                //footer

global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after

global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)

global.htka = '』––––––' // Hiasan Title  (KANAN)

global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS

global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS

global.htjava = '⫹⫺'    //hiasan Doang :v

global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/

global.stickpack = '.'

global.stickauth = `☂︎\n𝗞\na\nn\nn\na\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/

global.rpg = {

  emoticon(string) {

    string = string.toLowerCase()

    let emot = {

      level: '📊',

      limit: '🎫',

      health: '❤️',

      exp: '✨',

      money: '💹',

      bank: '🏦',

      potion: '🥤',

      diamond: '💎',

      common: '📦',

      uncommon: '🛍️',

      mythic: '🎁',

      legendary: '🗃️',

      superior: '💼',

      pet: '🔖',

      trash: '🗑',

      armor: '🥼',

      sword: '⚔️',

      pickaxe: '⛏️',

      fishingrod: '🎣',

      wood: '🪵',

      rock: '🪨',

      string: '🕸️',

      horse: '🐴',

      cat: '🐱',

      dog: '🐶',

      fox: '🦊',

      petFood: '🍖',

      iron: '⛓️',

      gold: '🪙',

      emerald: '❇️',

      upgrader: '🧰'

      

    }

    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))

    if (!results.length) return ''

    else return emot[results[0][0]]

  }

}

//------ JANGAN DIUBAH -----

let file = fileURLToPath(import.meta.url)

watchFile(file, () => {

  unwatchFile(file)

  console.log(chalk.redBright("Update 'config.js'"))

  import(`${file}?update=${Date.now()}`)

})
