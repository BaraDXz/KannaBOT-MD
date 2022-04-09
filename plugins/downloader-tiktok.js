import xa from 'xfarr-api'
let handler = async(m, { conn, usedPrefix, args, command }) => {
    if(!args[0]) throw `Harap masukkan URL sebagai parameter!\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSdNmfmeJ/`
    xa.Tiktok(args[0])
    .then(async data => {   
    let caption = `                   *「 T I K T O K 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
──────────────────────────
*📛 Title:* ${data.title}
*🖼️ Quality:* ${data.medias[1].quality}
*📊 Size:* ${data.medias[1].forrmattedSize}`
    await conn.sendHydrated(m.chat, caption, global.wm, data.medias[1].url, `${args[0]}`, '🌎 L I N K', null, null, [[null, null],[null,null],[null,null]], m) 
    })
}
handler.command = /^(tiktok|tk|tkdl|td)$/i
handler.tags = ['downloader']
handler.help = ['tiktok <url>']

export default handler