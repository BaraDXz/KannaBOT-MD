import fetch from 'node-fetch'
  import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command, args }) => {
  
  let res = await(await fetch(`https://hardianto.xyz/api/tools/ssweb?url=${args[0]}&apikey=hardianto`)).buffer()
  if(!args[0]) throw `Linknya mana?`
conn.sendHydrated(m.chat, `*「 Screenshot Web 」*\n\n*💻 Url:* ${args[0]}`, null, res, `${args[0]}`, '🌎 U R L', null, null, [[null,null],[null,null],[null,null]], m)
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?|scre?e?nshu?o?t$/i
export default handler