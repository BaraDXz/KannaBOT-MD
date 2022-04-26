let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	if (global.optsnsfw == false) return m.reply('Fitur Ini dimatikan Oleh Owner!')
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

let res = 'https://hardianto.xyz/api/anime/random?nsfw='
let api = '&apikey=hardianto'
let tekk = '•·––––––––– NSFW –––––––––·•\nHuuuu... sange sama kartun'
  let teks = `Silahkan Pilih Dibawah!\nAtau ketik ${usedPrefix}nsfw neko`
const sections = [
   {
	title: '•·––––––––– NSFW –––––––––·•',
	rows: [
	{title: "A • Anal", rowId: ".nsfw anal"},
	{title: "B • BlowJob", rowId: ".nsfw blowjob"},
	{title: "C • Cumsluts", rowId: ".nsfw cums"},
	{title: "E • Ero", rowId: ".nsfw ero"},
	{title: "E • Ero Feet", rowId: ".nsfw erofeet"},
	{title: "E • Ero Holo", rowId: ".nsfw holoero"},
	{title: "E • Ero Kitsune", rowId: ".nsfw erokitsune"},
	{title: "E • Ero Neko", rowId: ".nsfw eroneko"},
	{title: "E • Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: "F • Feet", rowId: ".nsfw feet"},
	{title: "F • Femdom", rowId: ".nsfw femdom"},
	{title: "F • Futanari", rowId: ".nsfw futanari"},
	{title: "G • Girl Solo", rowId: ".nsfw girlsolo"},
	{title: "H • Hentai", rowId: ".nsfw hentai"},
	{title: "H • Holo", rowId: ".nsfw holo"},
	{title: "K • Kitsune", rowId: ".nsfw kitsune"},
	{title: "K • Kuni", rowId: ".nsfw kuni"},
	{title: "N • Neko", rowId: ".nsfw neko"},
	{title: "O • Oppai", rowId: ".nsfw oppai"},
	{title: "P • Pussy", rowId: ".nsfw pussy"},
	{title: "S • Spank", rowId: ".nsfw spank"},
	{title: "T • Tits", rowId: ".nsfw tits"},
	{title: "T • Trap", rowId: ".nsfw trap"},
	{title: "Y • Yuri", rowId: ".nsfw yuri"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *NSFW* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(nsfw|hentai)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'anal':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'anal' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'blowjob':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'blowjob' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'cums':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'cumsluts' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'ero':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'ero' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'erofeet':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroFeet' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'holoero':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'holoEro' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'erokitsune':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroKitsune' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'eroneko':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroNeko' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'eroyuri':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'eroYuri' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'feet':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'feet' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'femdom':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'femdom' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'futanari':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'futanari' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'girlsolo':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'girlSolo' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'hentai':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'hentai' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'holo':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'holo' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'kitsune':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'kitsune' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'kuni':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'kuni' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'neko':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'neko' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'oppai':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'boobs' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'pussy':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'pussy' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'spank':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'spank' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'tits':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'tits' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'trap':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'trap' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            case 'yuri':
          m.reply(wait)
          conn.sendButton(m.chat, tekk, wm, await(await fetch(res + 'yuri' + api)).buffer(), [['NEXT', `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
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
handler.premium = global.premnsfw

export default handler
