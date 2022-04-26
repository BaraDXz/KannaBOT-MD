let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let isEnable = (args[1] == false ? false : false || args[1] == true ? true : true)
  if (!isEnable) return m.reply('Options Tidak tersedia, *False* or *True*')
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()


const sections = [
   {
	title: '- - - - - [ ENABLE ] - - - - -',
	rows: [
	    {title: "🎚️ OPTIONS", rowId: ".optn opts true", description: "Untuk mengaktifkan fitur nsfw"},
	{title: "🌟 ONLY PREMIUM", rowId: ".optn prem true", description: "Nsfw Hanya untuk Premium"},
	]
    },{
	title: '- - - - - [ DISABLE ] - - - - -',
	rows: [
	    {title: "🎚️ OPTIONS", rowId: ".optn opts false", description: "Untuk mematikan fitur nsfw"},
	{title: "🌟 ONLY PREMIUM", rowId: ".optn prem false", description: "Nsfw Free All"},
	]
  },
]

const listMessage = {
  text: ' ',
  footer: null,
  title: '⚙️ OPTIONS NSFW',
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(optn|optsnsfw)/i.test(command)) {
        switch (type) {
          case 'opts':
          global.optsnsfw = args[1]
          conn.reply(m.chat, '*Succes*', m)
            break
            case 'prem':
          global.premnsfw = args[1]
          conn.reply(m.chat, '*Succes*', m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
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

handler.help = ['optsnsfw']
handler.tags = ['owner']
handler.command = /^(op(tn|tsnsfw))/i

export default handler
