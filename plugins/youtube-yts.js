import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'β³οΈ Que quieres que busque en YouTube?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
π *${v.title}* (${v.url})
β DuraciΓ³n: ${v.durationH}
β²οΈ Subido ${v.publishedTime}
ποΈ ${v.view} views
      `.trim()
      case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} (${v.subscriber}) suscriptores
π₯ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['ytsearch <busca>'] 
handler.tags = ['tools']
handler.command = ['ytsearch'] 

export default handler
