let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

if (!text) throw `uso corretto:
${usedPrefix + command} il più Unlimited`
let em = ['😀','😂','🍑','😍','🤤','🥵','😐','🙂','😎','👻','💩','🥴','🤑','🤓']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let am = em.getRandom()
   await conn.sendButton(m.chat, `${toM(a)} *${text}*${am}`, author, null, [['Altro', '.random ' + text]], m,{mentions: [a]})
    
}

handler.command = handler.help = ['random']
handler.tags = ['fun']

handler.group = true

export default handler
 