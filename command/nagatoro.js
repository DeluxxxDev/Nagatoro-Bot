require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const yts = require('yt-search');

//Hora
const time = moment().tz('America/Buenos_Aires').format("HH:mm:ss")
const wib = moment.tz('America/Buenos_Aires').format('HH:mm:ss')
const wita = moment.tz('America/Buenos_Aires').format("HH:mm:ss")
const wit = moment.tz('America/Buenos_Aires').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')
const dbog = require('../lib/Database.js')
const dbmesseg = new dbog()


//Module Exports
module.exports = nagatoro = async(nagatoro, m, chatUpdate, store) => {
try {
  //console.log(m)


var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = nagatoro.user.id ? nagatoro.user.id.split(":")[0]+"@s.whatsapp.net" : nagatoro.user.id
const isOwner = [nagatoro.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == nagatoro.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mode = 'public'

if (m && m.mtype == "protocolMessage") nagatoro.ev.emit("message.delete", m.message.protocolMessage.key);

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await nagatoro.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)


const reply = (texto) => {
			nagatoro.sendMessage(m.chat, { text: texto, mentions: [m.sender] }, {	quoted: m })
		}


if (m.isGroup) {
    try {
		let gchats = global.db.data.group[m.chat]
    if (typeof gchats !== 'object') global.db.data.group[m.chat] = {}
    if (gchats) {
    if (!('antilink' in gchats)) gchats.antilink = false
    if (!('antidelete' in gchats)) gchats.antidelete = false
    if (!('antiviewone' in gchats)) gchats.antiviewone = false
    } else global.db.data.group[m.chat] = {
    antilink: false,
    antidelete: false,
    antiviewone: false
    
    }
    } catch (err) {
    console.error(err)
    }
}

//anti delete
if (m.isGroup && db.data.group[m.chat].antidelete) {
    nagatoro.addMessage(m, m.mtype);
}


// Antilink
if (m.isGroup && db.data.group[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com` || 'https://')) {
m.reply(`Link detectado\nEliminando usuario`)
if (!isBotAdmins) return //  buat ngediem in daripada nyepam m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await nagatoro.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`No te eliminare por que es link del grupo, buen dia sempai uwu`)
if (isAdmins) return m.reply(`No te eliminare por que eres admin, buen dia sr admin uwu`)
if (isOwner) return m.reply(`Ho~hola creador >_<`)
nagatoro.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (m.isGroup && db.data.group[m.chat].antiviewone) {
		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti Ver Una Vez* 」
    
     *Nick* : ${pushname}
     *Tag* : @${m.sender.split("@")[0]}
     *Hora* : ${moment.tz('America/Buenos_Aires').format('HH:mm:ss')} WIB
    
     *Tipo* : ${m.mtype}`
     reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => m.reply('Xd'))
		}
}



if (mode == 'self') {
if (!m.key.fromMe && !isOwner) return
}

//Push command To Console
if (command) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m nagatoro \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'de', chalk.blue(pushname), 'para', chalk.yellow(groupName ? groupName : 'chat privado' ), 'args :', chalk.white(args.length))
}

var itemss = {
key: {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "5499999999999@g.us"
},
"message": {
orderMessage: {
itemCount: 009,status: 4,
thumbnail: global.icon,
message: `Nombre: ${pushname}
Comando: ${prefix + command}`
,surface: 100,
sellerJid: "0@s.whatsapp.net"
}
}
}

switch(command) {

case 'resetdbpesan': case 'resetdb': case 'resetdatabase': {
  fs.writeFileSync('./database/mess.json', JSON.stringify([], null, 2))
  m.reply("success")
}
break;


case 'menu': case 'help': case '?': {
  let menu = `
 _*ITSUKI-MD*_
  
╔════════
╠══ *GRUPO*
╠ ${prefix}antilink
╠ ${prefix}Antidelete
╠ ${prefix}antiviewone
╠ ${prefix}linkgroup
╠ ${prefix}revoke
╠ ${prefix}kick
╠ ${prefix}add
╠ ${prefix}promote
╠ ${prefix}demote
╠ ${prefix}setname
╠ ${prefix}setdesk
╠ ${prefix}setppgrup
╠ ${prefix}tagall
╠ ${prefix}hidetag
╠ ${prefix}ephemeral
╚════════
  
╔════════
╠══ *ANIME*
╠ ${prefix}waifu
╠ ${prefix}cry
╠ ${prefix}kill
╠ ${prefix}hug
╠ ${prefix}pat
╠ ${prefix}lick
╠ ${prefix}kiss
╠ ${prefix}bite
╠ ${prefix}yeet
╠ ${prefix}neko
╠ ${prefix}bully
╠ ${prefix}bonk
╠ ${prefix}wink
╠ ${prefix}poke
╠ ${prefix}nom
╠ ${prefix}slap
╠ ${prefix}smile
╠ ${prefix}wave
╠ ${prefix}awoo
╠ ${prefix}blush
╠ ${prefix}smug
╠ ${prefix}glomp
╠ ${prefix}happy
╠ ${prefix}dance
╠ ${prefix}cringe
╠ ${prefix}cuddle
╠ ${prefix}highfive
╠ ${prefix}shinobu
╠ ${prefix}megumin
╠ ${prefix}handhold
╚════════
  
╔════════
╠══ *MAKER*
╠ ${prefix}sticker
╠ ${prefix}toimg
╠ ${prefix}tovideo
╠ ${prefix}toaudio
╠ ${prefix}tomp3
╠ ${prefix}tovn
╠ ${prefix}togif
╠ ${prefix}tourl
╚════════

╔════════
╠══ *RANDOM*
╠ ${prefix}pinterest
╠ ${prefix}wallpaper
╠ ${prefix}wikimedia
╚════════

╔════════
╠══ *OTROS*
╠ ${prefix}delete
╠ ${prefix}owner
╠ ${prefix}ping
╠ ${prefix}menu / ${prefix}help / ${prefix}?
╚════════

╔════════
╠══ *DESCARGA*
╠ ${prefix}play
╠ ${prefix}yts
╠ ${prefix}ytmp3
╠ ${prefix}ytmp4
╚════════

╔════════
╠══ *DUEÑO*
╠ ${prefix}bc
╠ ${prefix}bcgc
╠ ${prefix}join
╠ ${prefix}leave
╠ ${prefix}block
╠ ${prefix}unblock
╠ ${prefix}setppbot
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}eval
╚════════
  `
  let but = [
  {"quickReplyButton": {"displayText": "Dueño","id": "owner"},},
  {"quickReplyButton": {"displayText": "Estado Del Bot","id": `ping`}}
  ]
  nagatoro.sendButtonImg(m.chat, menu, global.ownerName, global.thumb, but, global.thumb)
  }
  break
case 'owner': {
  nagatoro.sendContact(m.chat, global.ownerNumber, itemss)
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ 
${oldd - neww} _milisegundos_

Tiempo activo : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usado_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break

//Owner Menu
case 'bcgc': case 'bcgroup': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let getGroups = await nagatoro.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nEspera unos segundos sempai')
  for (let i of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${nagatoro.user.name}*\n\n*✉️ Mensaje :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  nagatoro.sendMessage(i, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${nagatoro.user.name}*\n\n*✉️ Mensaje :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  nagatoro.sendMessage(i, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${nagatoro.user.name}*\n\n*✉️ Mensaje :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await nagatoro.sendButtonText(i, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nEspera unos segundos sempai :3')
  for (let yoi of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${nagatoro.user.name}*\n\n*✉️ Mensaje :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  nagatoro.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${nagatoro.user.name}*\n\n*✉️ Mensaje :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  nagatoro.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${nagatoro.user.name}*\n\n*✉️ Mensaje :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await nagatoro.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
  }
  m.reply('Listo sempai uwu')
  }
  }
  break
case 'entrar':
case 'join': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!text) return m.reply('Falto el enlace sempai!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalido!'
  m.reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await nagatoro.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply('Error'))
  }
  break
case 'salirbot':
case 'leave': {
  if (!isOwner) return m.reply(mess.botOwner)
  await nagatoro.groupLeave(m.chat).then((res) => m.reply('Bye bye grupo\nMe voy a jugar uwu')).catch((err) => m.reply('Error'))
  }
  break
case 'blockear':
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await nagatoro.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply('Error'))
  }
  break
case 'desbloqear':
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await nagatoro.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply('Error'))
  }
  break
case 'fotobot':
case 'profilebot':
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  m.reply(mess.wait)
 await nagatoro.updateProfilePicture(nagatoro.user.jid, media).then(() => reply('Gracias por la nueva foto sempai >_<')).catch(reply)
// suport full image 
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  nagatoro.public = true
  m.reply('MODO PUBLICO')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  nagatoro.self = false
  m.reply('MODO PRIVADO')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

//Group Menu
case 'antilink':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antilink) return m.reply(`Ya activo`)
  db.data.group[m.chat].antilink = true
  m.reply(`Antilink activado con exito sempai!`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antilink) return m.reply(`Ya desactivado`)
  db.data.group[m.chat].antilink = false
  m.reply(`Antilink desactivado con exito!`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await nagatoro.sendButtonText(m.chat, buttonsantilink, `Modo ${command} `, `Puedes elejir aqui abajo sempai`, itemss)
  }
  break

case 'antidelete':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antidelete) return m.reply(`Ya activo`)
  db.data.group[m.chat].antidelete = true
  m.reply(`Antidelete activado con exito sempai!`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antidelete) return m.reply(`Ya desactivado`)
  db.data.group[m.chat].antidelete = false
  m.reply(`Antidelete desactivado con exito!`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await nagatoro.sendButtonText(m.chat, buttonsantilink, `Modo ${command}️`, `Puedes elejir aqui abajo sempai`, itemss)
  }
  break

case 'antiviewone':
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.group[m.chat].antiviewone) return m.reply(`Ya desactivado`)
  db.data.group[m.chat].antiviewone = true
  m.reply(`Antiviewone activado con exito sempai!`)
  } else if (args[0] === "off") {
  if (!db.data.group[m.chat].antiviewone) return m.reply(`Ya desactivado`)
  db.data.group[m.chat].antiviewone = false
  m.reply(`Antiviewone desactivado con exito!`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await nagatoro.sendButtonText(m.chat, buttonsantilink, `Modo ${command} ️`, `Puedes elejir aqui abajo sempai`, itemss)
  }
  break

case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await nagatoro.groupInviteCode(m.chat)
  nagatoro.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo : ${groupMetadata.subject}`, itemss, { detectLink: true })
  }
  break
case 'resetlink':
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await nagatoro.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('A quien quieres eliminar??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await nagatoro.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('A quien quieres eliminar??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await nagatoro.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promover':
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('A quien hago admin??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await nagatoro.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'degradar':
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('A quien le saco el admin??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await nagatoro.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'nombregp': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return 'Y el texto?'
  await nagatoro.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return 'Y el texto?'
  await nagatoro.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'fotogp': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Responde a una imagen con el comando ${prefix + command}`)
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
    m.reply(mess.wait)
  await nagatoro.updateProfilePicture(from, media).then(() => reply('Listo sempai uwu')).catch(reply)
  }
  break
case 'tagall': case 'tag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*Tag By Admin*
 
️ *Mensaje : ${q ? q : 'ninguno'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]} <<\n`
  }
  nagatoro.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: itemss })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  nagatoro.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: itemss })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Ingreza los valores enable/disable')
  if (args[0] === 'enable') {
  await nagatoro.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await nagatoro.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await nagatoro.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Grupo cerrado :3`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await nagatoro.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Listo sempai uwu`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Abrir' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Cerrar' }, type: 1 }
  ]
  await nagatoro.sendButtonText(m.chat, buttonsgroup, `Modo ${command}️`, `Elije de las opciones de abajo sempai`, itemss)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await nagatoro.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Listo sempai`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await nagatoro.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Listo sempai`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await nagatoro.sendButtonText(m.chat, buttons, `Modo Edit Info`, `Elije de las opciones de abajo sempai`, itemss)
  }
  }
  break

//Anime
case 'waifu':
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':{
let ew = await fetchJson(`https:/\/\waifu.pics/api/sfw/${command}`)
let buttons = [
{
 buttonId: `${prefix + command}`, 
 buttonText: {
displayText: 'SIGUIENTE'
}, type: 1},
]
let buttonMessage = {
image: { url: ew.url },
caption: `Ramdom ${command}\nby Nagatoro-MD`,
footer: `@DeluxxxDevolper`,
buttons: buttons,
headerType: 4
 }
 nagatoro.sendMessage(m.chat, buttonMessage, { quoted: itemss })
}
 break


//Maker
case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (!quoted) return m.reply(`Responde a un Video/Imagen con el comando ${prefix + command}`)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  m.reply(mess.wait)
  let encmedia = await nagatoro.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximo 10 segundos!')
  let media = await quoted.download()
  m.reply(mess.wait)
  let encmedia = await nagatoro.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  return `Responde a un Video/Imagen con el comando ${prefix + command}\nDurasion del Video 1-9 segundos`
  }
  }
  break

case 'toimage': case 'toimg': {
  if (!quoted) return 'Responde a un sticker con este comando'
  if (!/webp/.test(mime)) return m.reply(`Responde a un sticker con este comando *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return err
  let buffer = fs.readFileSync(ran)
  nagatoro.sendMessage(m.chat, { image: buffer }, { quoted: itemss })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!quoted) return 'Reply Image'
  if (!/webp/.test(mime)) return `Responde a un sticker animado con este comando *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await nagatoro.sendMessage(m.chat, { video: { url: webpToMp4.result } }, { quoted: itemss })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return `Responde a un Video/Audio con este comando ${prefix + command}`
  if (!quoted) return `Responde a un Video/Audio con este comando ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  nagatoro.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (/document/.test(mime)) return `Responde a un Video/Audio con este comando ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) return `Responde a un Video/Audio con este comando ${prefix + command}`
  if (!quoted) return `Responde a un Video/Audio con este comando ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  nagatoro.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `By ${nagatoro.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return `Responde a un Video/Audio con este comando ${prefix + command}`
  if (!quoted) return `Responde a un Video/Audio con este comando ${prefix + command}`
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  nagatoro.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  }
  break
case 'togif': {
  if (!quoted) return 'Responde a un sticker animado con este comando'
  if (!/webp/.test(mime)) return `Responde a un sticker animado con este comando *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await nagatoro.sendMessage(m.chat, { video: { url: webpToMp4.result }, gifPlayback: true }, { quoted: itemss })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await nagatoro.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(anu)
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(anu)
  }
  await fs.unlinkSync(media)
  }
  break

//Random Menu
case 'pin':
case 'pinterest': {
  if (!text) return m.reply(`Que es lo que buscas sempai?`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttons = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'SIGUIENTE'}, type: 1}]
  let buttonMessage = {
  image: { url: result },
  caption: 'Busqueda sobre:'+text+'\nLink img : '+result,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4,
  contextInfo :{externalAdReply: {
  title: "© Nagatoro-MD",
  mediaType: 1,
  renderLargerThumbnail: true,
  showAdAttribution: true,
  body: `Busqueda de Pinterest`,
  thumbnail: await getBuffer(`${global.thumblink}`),
  sourceUrl: "https://wa.me/5493816565890",
  }}
  }
  nagatoro.sendMessage(m.chat, buttonMessage, { quoted: itemss })
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`Que es lo que buscas sempai?`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'SIGUINTE'}, type: 1}]
  nagatoro.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Link img : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: itemss })
  }
  break
case 'wikimedia': {
  if (!text) return reply('Que es lo que buscas sempai?')
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'SIGUIENTE'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `
  Titulo : ${result.title}
  Fuente : ${result.source}
  Link img : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4,
  contextInfo :{externalAdReply: {
  title: "© Nagatoro-MD",
  mediaType: 1,
  renderLargerThumbnail: true,
  showAdAttribution: true,
  body: `Busqueda de wikipedia en imagen`,
  thumbnail: await getBuffer(`${global.thumblink}`),
  sourceUrl: "https://wa.me/5493816565890",
  }}
  }
  nagatoro.sendMessage(m.chat, buttonMessage, { quoted: itemss })
  }
  break

//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('../lib/y2mate')
  if (!q) return m.reply(`Ejemplo : ${command} link de video de yt`)
  if (!isUrl(q)) return m.reply('Link Invalido')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalido')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('Este archivo supero el limite de descarga, igual aqui tienes el link de descarga : '+media.dl_link)
  nagatoro.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`}, { quoted: itemss })
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('../lib/y2mate')
  if (!q) return m.reply(`Ejemplo : ${command} link de video de yt`)
  if (!isUrl(q)) return m.reply('Link Invalido')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalido')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('Este archivo supero el limite de descarga, igual aqui tienes el link de descarga : '+media.dl_link)
  var caption = `
*------ MUSIC YT -----*

  Titulo : ${media.title}
  Peso : ${media.filesizeF}
  Link : ${isUrl(text)}
  Formato : MP3
  Calidad : ${args[1] || '128kbps'}`
  nagatoro.sendMessage(m.chat, 
  {
  text: caption, 
  contextInfo :{externalAdReply: {
  title: "© Nagatoro-MD",
  mediaType: 1,
  renderLargerThumbnail: true,
  showAdAttribution: true,
  body: `Elije para audio o video uwu`,
  thumbnail: await getBuffer(`${global.thumblink}`),
  sourceUrl: isUrl(text),
  }}
  }, {
  	quoted: itemss 
  	}
  )
  nagatoro.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: itemss })
  }
  break
case 'yts': case 'ytsearch': {
  m.reply(mess.wait)
  if (!text) return `Ejemplo : ${prefix + command} Joji - Ew`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Busqueda En YouTube ----*\n\n Consulta : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `
 No : ${no++}
 Tipo : ${i.type}
 Video ID : ${i.videoId}
 Titulo : ${i.title}
 Vistas : ${i.views}
 Duracion : ${i.timestamp}
 Fecha de subida : ${i.ago}
 Autor : ${i.author.name}
 Link del video : ${i.url}\n\n─────────────────\n\n`
  }
  nagatoro.sendMessage(m.chat,
  {
  image: { url: search.all[0].thumbnail },
  caption: teks },
  { quoted: itemss })
  }
  break
case 'play':
  if (!text) return `Ejemplo : ${prefix + command} Joji - Ew`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [{
buttonId: `ytmp3 ${anu.url}`,
buttonText: {
displayText: 'Audio'
},
type: 1
}, {
buttonId: `ytmp4 ${anu.url}`, 
buttonText: {
displayText: 'Video'
},
type: 1
}]

let txtplayuwu = `*----- PLAY YOUTUBE -----*
  
  *Titulo :* 
( ${anu.title} )
  *Duracion :* 
( ${anu.timestamp} )
  *Vistas :* 
( ${anu.views} )
  *Fecha de subida :* 
( ${anu.ago} )
  *Canal :* 
( ${anu.author.url} )
  *Link del video :* 
( ${anu.url} )

  _*Nagatoro-MD*_
`
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: txtplayuwu,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4,
  contextInfo :{externalAdReply: {
  title: "© Nagatoro-MD",
  mediaType: 1,
  renderLargerThumbnail: true,
  showAdAttribution: true,
  body: `Elije para audio o video uwu`,
  thumbnail: await getBuffer(`${global.thumblink}`),
  sourceUrl: anu.url,
  }}
  }
  nagatoro.sendMessage(m.chat, buttonMessage, { quoted: itemss })
  break

//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
//  m = String(err)
  m.reply(require('util').format(err));
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
    
  } catch (err) {
    console.log("error en el archivo nagatoro.js "+util.format(err))
//  m.reply(util.format(err))
  }

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Se actualizo ${__filename}`))
delete require.cache[file]
require(file)
})
