//------- MADE BY.   //Credit, Jangan diganti!
//Letta - Sama !
//------------------

let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
import neko from 'nekos.life'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, ' ','🔴 *Nsfw diChat Ini belum dinyalakan*', null, [['ON', '.on nsfw']], m)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

// SOURCE
let res = 'https://api-hyzer.herokuapp.com/randomimg/akaneko?param='
let api = ' '

let xres = 'https://api.xteam.xyz/randomimage/'
let xapi = '?APIKEY=YOURAPIKEY'

// OPTIONS ( False = Free, True = premium)

// EXAMPLE:
// let nsfww = (ch == true ? false : <Options, pilih true atau false>)

// *FREE
// let nsfww = (ch == true ? false : false)

// *PREM
// let nsfww = (ch == true ? false : true)

//--------------------------------------
let ch = db.data.chats[m.chat].premnsfw
let ahegao = (ch == true ? false : false)
let anal = (ch == true ? false : false)
let ass = (ch == true ? false : true)
let blowjob = (ch == true ? false : true)
let cums = (ch == true ? false : true)
let ero = (ch == true ? false : false)
let erofeet = (ch == true ? false : false)
let holoero = (ch == true ? false : false)
let erokitsune = (ch == true ? false : false)
let eroneko = (ch == true ? false : false)
let eroyuri = (ch == true ? false : true)
let feet = (ch == true ? false : true)
let femdom = (ch == true ? false : true)
let futanari = (ch == true ? false : true)
let girlsolo = (ch == true ? false : true)
let hentai = (ch == true ? false : true)
let holo = (ch == true ? false : true)
let kitsune = (ch == true ? false : true)
let kuni = (ch == true ? false : true)
let manga = (ch == true ? false : true)
let mstrb = (ch == true ? false : true)
let neko = (ch == true ? false : false)
let panties = (ch == true ? false : false)
let pussy = (ch == true ? false : true)
let oppai = (ch == true ? false : true)
let spank = (ch == true ? false : true)
let tentacles = (ch == true ? false : true)
let thighs = (ch == true ? false : true)
let tits = (ch == true ? false : true)
let trap = (ch == true ? false : true)
let uniform = (ch == true ? false : false)
let waifu = (ch == true ? false : true)
let yuri = (ch == true ? false : true)

let txtprem = 'ONLY PREMIUM'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `┏─────────[ *NSFW* ]───···
┊ Wangy wangyy > / / / <
┗[ \`\`\`${args[0]}\`\`\` ]`
  let teks = `┊ 📮 Silahkan Pilih Dibawah!\n┊› Atau ketik ${usedPrefix}nsfw neko\n❏──···––`
const sections = [
   {
	title: '◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥',
	rows: [
	{title: `${ ahegao == true ? p : f}` + "A • Ahegao", rowId: ".nsfw ahegao"},
	//{title: `${ anal == true ? p:f}` + "A • Anal", rowId: ".nsfw anal"},
	{title: `${ ass == true ? p:f}` + "A • Ass", rowId: ".nsfw ass"},
	{title: `${ blowjob == true ? p:f}` + "B • BlowJob", rowId: ".nsfw blowjob"},
	{title: `${ cums == true ? p:f}` + "C • Cumsluts", rowId: ".nsfw cums"},
	{title: `${ ero == true ? p:f}` + "E • Ero", rowId: ".nsfw ero"},
	{title: `${ erofeet == true ? p:f}` + "E • Ero Feet", rowId: ".nsfw erofeet"},
	//{title: `${ holoero == true ? p:f}` + "E • Ero Holo", rowId: ".nsfw holoero"},
	//{title: `${ erokitsune == true ? p:f}` + "E • Ero Kitsune", rowId: ".nsfw erokitsune"},
	{title: `${ eroneko == true ? p:f}` + "E • Ero Neko", rowId: ".nsfw eroneko"},
	//{title: `${ eroyuri== true ? p:f}` + "E • Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${ feet == true ? p:f}` + "F • Feet", rowId: ".nsfw feet"},
	{title: `${ femdom == true ? p:f}` + "F • Femdom", rowId: ".nsfw femdom"},
	//{title: `${ futanari == true ? p:f}` + "F • Futanari", rowId: ".nsfw futanari"},
	//{title: `${ girlsolo == true ? p:f}` + "G • Girl Solo", rowId: ".nsfw girlsolo"},
	{title: `${ hentai == true ? p:f}` + "H • Hentai", rowId: ".nsfw hentai"},
	//{title: `${ holo == true ? p:f}` + "H • Holo", rowId: ".nsfw holo"},
	//{title: `${ kitsune == true ? p:f}` + "K • Kitsune", rowId: ".nsfw kitsune"},
	//{title: `${ kuni == true ? p:f}` + "K • Kuni", rowId: ".nsfw kuni"},
	{title: `${ manga== true ? p:f}` + "M • Manga", rowId: ".nsfw manga"},
	{title: `${ mstrb == true ? p:f}` + "M • Mstrb", rowId: ".nsfw mstrb"},
	{title: `${ neko == true ? p:f}` + "N • Neko", rowId: ".nsfw neko"},
	{title: `${ oppai == true ? p:f}` + "O • Oppai", rowId: ".nsfw oppai"},
	{title: `${ panties == true ? p:f}` + "P • Panties", rowId: ".nsfw panties"},
	{title: `${ pussy == true ? p:f}` + "P • Pussy", rowId: ".nsfw pussy"},
	//{title: `${ spank == true ? p:f}` + "S • Spank", rowId: ".nsfw spank"},
	{title: `${ tentacles == true ? p:f}` + "T • Tentacles", rowId: ".nsfw tentacles"},
	{title: `${ thighs == true ? p:f}` + "T • Thighs", rowId: ".nsfw thighs"},
	//{title: `${ tits == true ? p:f}` + "T • Tits", rowId: ".nsfw tits"},
	{title: `${ trap == true ? p:f}` + "T • Trap", rowId: ".nsfw trap"},
	{title: `${ uniform == true ? p:f}` + "U • Uniform", rowId: ".nsfw uniform"},
	{title: `${ waifu == true ? p:f}` + "W • Waifu", rowId: ".nsfw waifu"},
	{title: `${ yuri == true ? p:f}` + "Y • Yuri", rowId: ".nsfw yuri"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: '┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',
  title: `❏––––[ *NSFW* ]–––`,
  buttonText: "- -NSFW- -",
  sections
}

  try {
    if (/(nsfw|hentai)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
        	case 'ahegao':
        if (ahegao == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
		
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'ahegao' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
          case 'anal':
          if (anal == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
		
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'anal' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'ass':
            if (ass == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'ass' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'blowjob':
            if (blowjob == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
            let bj = await(await fetch(`https://api.waifu.pics/nsfw/blowjob`)).json()
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, bj.url, [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'cums':
            if (cums == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'cum' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'ero':
            if (ero == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'ero' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'erofeet':
            if (erofeet == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroFeet' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'holoero':
            if (holoero == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'holoEro' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'erokitsune':
            if (erokitsune == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroKitsune' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'eroneko':
            if (eroneko == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'nsfwneko' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'eroyuri':
            if (eroyuri == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroYuri' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'feet':
            if (feet == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'feet' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'femdom':
            if (femdom == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'femdom' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'futanari':
            if (futanari == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'futanari' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'girlsolo':
            if (girlsolo == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'girlSolo' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'hentai':
            if (hentai == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'hentai' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'holo':
            if (holo == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'holo' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'kitsune':
            if (kitsune == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'kitsune' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'kuni':
            if (kuni == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'kuni' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'manga':
            if (manga == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'manga' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'mstrb':
            if (mstrb == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'mstrb' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'neko':
            if (neko == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'nsfwneko' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'oppai':
            if (oppai == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'boobs' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'panties':
            if (panties == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'panties' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'pussy':
            if (pussy == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'pussy' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'spank':
            if (spank == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'spank' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'tentacles':
            if (tentacles == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'tentacles' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'tits':
            if (tits == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'tits' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'thighs':
            if (thighs == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'thighs' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'trap':
            if (trap == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
            let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, tr.url, [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'uniform':
            if (uniform == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(xres + 'uniform' + xapi)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'waifu':
            if (waifu == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
            let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, wf.url, [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'yuri':
            if (yuri == true) { 
	if (db.data.users[m.sender].premiumTime < 1) return m.reply(txtprem)
		}
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'yuri' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/hentong/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['nsfw <type>', 'hentai <type>']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw|hentai)/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
