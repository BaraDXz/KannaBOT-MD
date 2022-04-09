let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
	let user = global.db.data.users[m.sender]
	if (user.limitjoin == 3) throw 'Limit Join anda sudah habis! (3 / 3)'
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    let expiredd = 86400000
    expired = Math.floor(Math.min(1, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
user.limitjoin += 1
    m.reply(`✔️ Berhasil join grup ${res}\n📛 BOT AKAN KELUAR DALAM 1 HARI`)
    m.reply(`(${user.limitjoin}/3) Limit For Using Join`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <chat.whatsapp.com> (1 Hari)']
handler.tags = ['premium']
handler.premium = true
handler.private = true

handler.command = /^join$/i

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))