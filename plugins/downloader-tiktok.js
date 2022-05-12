import { tiktokdl, tiktokdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
  
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
    
    let res = await fetch(`https://recoders-area.caliph.repl.co/api/tiktod/?url=${args[0]}`)
    
    let json = await res.json()
    let { result } = json
    let { nowatermark, watermark, audio } = result
    
    let url = watermark
    if (args[1] == 'nowm') {
    url = nowatermark
  }
  if (args[1] == 'wm') {
    url = watermark
  }
  if (args[1] == 'audio') {
    url = audio
  }
    if (!args[1]) return conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ${htka}`, 'select the type of download', 'https://telegra.ph/file/9d312cfaf746c169c4682.jpg', null,null,null,null, [['ᴡɪᴛʜ ᴡᴍ', `.tt ${args[0]} wm`],['ɴᴏ ᴡᴍ', `.tt ${args[0]} nowm`],['ᴀᴜᴅɪᴏ', `.tt ${args[0]} audio`]], m)
     
try {
    if (/tiktok|tt/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
       case 'wm':
       db.data.users[m.sender].limit -= 1
       m.reply('1 Limit Terpakai')
            conn.reply(m.chat, '「📨」ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ . . .', m, { contextInfo: {
        externalAdReply: {
            title: '     「🎶」 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 
            body: 'ɪᴍᴘᴏʀᴛɪɴɢ ᴍᴇᴅɪᴀ....',
            description: 'ɪᴍᴘᴏʀᴛɪɴɢ ᴍᴇᴅɪᴀ....',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9d312cfaf746c169c4682.jpg')).buffer(),
         mediaUrl: args[0]
        }
     }})
     
    conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`,`➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, await(await fetch(url)).buffer(), 
url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null,null, [
['ɴᴏ ᴡᴍ', `.tt ${args[0]} nowm`],
['ᴀᴜᴅɪᴏ', `.tt ${args[0]} audio`],
[null,null]], m)
            break
          case 'nowm':
    	if (db.data.users[m.sender].premiumTime < 1) return m.reply(`Command Ini Khusus User Premium !`)
    conn.reply(m.chat, '「📨」ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ . . .', m, { contextInfo: {
        externalAdReply: {
            title: '     「🎶」 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 
            body: 'ɪᴍᴘᴏʀᴛɪɴɢ ᴍᴇᴅɪᴀ....',
            description: 'ɪᴍᴘᴏʀᴛɪɴɢ ᴍᴇᴅɪᴀ....',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9d312cfaf746c169c4682.jpg')).buffer(),
         mediaUrl: args[0]
        }
     }})
    conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`,`➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, await(await fetch(url)).buffer(), 
url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null,null, [
['ᴀᴜᴅɪᴏ', `.tt ${args[0]} audio`],
[null,null],
[null,null]], m)
            break
            case 'audio':
            m.reply('1 Limit Terpakai')
            conn.reply(m.chat, '「📨」ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ . . .', m, { contextInfo: {
        externalAdReply: {
            title: '     「🎶」 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 
            body: 'ɪᴍᴘᴏʀᴛɪɴɢ ᴍᴇᴅɪᴀ....',
            description: 'ɪᴍᴘᴏʀᴛɪɴɢ ᴍᴇᴅɪᴀ....',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9d312cfaf746c169c4682.jpg')).buffer(),
         mediaUrl: args[0]
        }
     }})
     
    conn.sendFile(m.chat, await fetch(url), 'tiktok.mp3', '', m, null, {
    asDocument: false, ptt: false, contextInfo: {
        externalAdReply: {
            title: '                「🎶」 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ', 
            body: '⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻',
            description: '⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/9d312cfaf746c169c4682.jpg')).buffer(),
         mediaUrl: args[0]
        }
     }
  })
            break
          default:
            return conn.reply(m.chat, eror,m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, wm, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['tiktok'].map(v => v + ' <url> <type>')
handler.tags = ['downloader']

handler.command = /^(tiktok|tt)$/i

export default handler
