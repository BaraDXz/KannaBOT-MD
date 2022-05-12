import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
    let res = await fetch(`https://api.xteam.xyz/cekey?APIKEY=${args[0]}`)
    if (!args[0]) return m.reply('Apikeynya mana?')
    let json = await res.json()
    let { response, status } = await json
    let { ip, name, email, apikey, totalhit, premium, expired } = response
    if (response == "Apikey tidak ditemukan, silahkan daftar atau beli ke developer untuk mendapatkan apikey yang valid!") return m.reply('Apikey Invalid!')
await conn.reply(m.chat, `*]- - CHECK APIKEY XTEAM - -[*
• *Apikey:* ${apikey}

• *Name:* ${name}
• *Ip:* ${ip}
• *Email:* ${email}
• *Total Hit:* ${totalhit}
• *Premium:* ${premium}

${expired}`, m)
}
handler.help = ['xcekapi']
handler.tags = ['internet', 'tools']
handler.command = /^(xcekapi)$/i

export default handler
