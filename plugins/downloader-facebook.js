import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdlv2(args[0])
    for (const { url, isVideo } of result.reverse()) conn.sendHydrated(m.chat, `${htki} *FACEBOOK* ${htki}`, wm, url, url, '🌎 SOURCE', null,null, [[null,null],[null,null],[null,null]], m)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
