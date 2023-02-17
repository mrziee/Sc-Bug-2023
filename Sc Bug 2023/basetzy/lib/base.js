const {
    default: makeWAzyrenet,
    makeWALegacyzyrenet,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateWAMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    getContentType,
    relayMessage,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys")
const pino = require("pino")
const fs = require("fs")
const FileType = require("file-type")
const path = require("path")
const axios = require("axios")
const PhoneNumber = require("awesome-phonenumber")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require("./exif")
const { smsg, getBuffer, getSizeMedia } = require("./myfunc")
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) })
exports.makeWASocket = (connectionOptions, options = {}) => {
const zyren = makeWAzyrenet(connectionOptions)
//=================================================//
zyren.pickRandom = (list) => {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
zyren.sendVn = (jid, path, setquoted) => {
return zyren.sendMessage(jid, { audio: path, mimetype: 'audio/mp4', ptt: true }, { quoted: setquoted })
}
//=================================================//
zyren.sendSticker = (jid, path, setquoted) => {
return zyren.sendMessage(jid, { sticker: path }, { quoted: setquoted })
}
//=================================================//
zyren.checkDataName = (name, data) => {
let status = false
Object.keys(data).forEach((x) => {
if (data[x].name === name) {
status = true
}
})
return status
}
//=================================================//
zyren.createDataId = (name, data) => {                                                                                                                      
const obj = { 
name: name, 
id: [] 
}
data.push(obj)
}
//=================================================//
zyren.getDataId = (name, data) => {
let position = false
Object.keys(data).forEach((x) => {
if (data[x].name === name) {
position = x
}
})
if (position !== false) {
return data[position].id
}
}
//=================================================//
zyren.addDataId = (nama, id, data) => {
let found = false
Object.keys(data).forEach((x) => {
if (data[x].name == nama){
found = x
}
})
if (found !== false) {
data[found].id.push(id)
}
}
//=================================================//
zyren.removeDataId = (nama, id, data) => {
let found = false
Object.keys(data).forEach((x) => {
if (data[x].name == nama){
found = x
}
})
if (found !== false) {
data[found].id.splice(data[found].id.indexOf(id, 1))
}
}
//=================================================//
zyren.checkDataId = (nama, id, data) => {
let found = false
let status = false
Object.keys(data).forEach((x) => {
if (data[x].name == nama){
found = x
}
})
if (found !== false) {
for (let indexs of data[found].id){
if (indexs == id){
status = true
}
}
}
return status
}
//=================================================//
zyren.getName = (jid, withoutContact  = false) => {
id = zyren.decodeJid(jid)
withoutContact = zyren.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = zyren.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"))
})
else v = id === "0@s.whatsapp.net" ? {
id,
name: "WhatsApp"
} : id === zyren.decodeJid(zyren.user.id) ?
zyren.user :
(store.contacts[id] || {})
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international")
}
//=================================================//
zyren.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + "@" + decode.server || jid
} else return jid
}
//=================================================//
zyren.getName = (jid, withoutContact  = false) => {
id = zyren.decodeJid(jid)
withoutContact = zyren.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = zyren.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"))
})
else v = id === "0@s.whatsapp.net" ? {
id,
name: "WhatsApp"
} : id === zyren.decodeJid(zyren.user.id) ?
zyren.user :
(store.contacts[id] || {})
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international")
}
//=================================================//
zyren.sendContact = async (jid, number, name, quoted, options) => {
let njid = number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name.replace(/\n/g, '\\n')}\nTEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}\nEND:VCARD`
return await zyren.sendMessage(jid, {
contacts: {
displayName: `${name}`,
contacts: [{ vcard }],
...options
}
},
{
quoted,
...options
})
}
//=================================================//
zyren.sendKontak = async (jid, data, quoted, options) => {
let vcard = []
for (let x of data) {
try{
var name = x == db.data.settings[zyren.decodeJid(zyren.user.id)].nomerowner + "@s.whatsapp.net"? db.data.settings[zyren.decodeJid(zyren.user.id)].namaowner : db.data.users[x].name
} catch {
var name = await zyren.getName(x)
}               
vcard.push({vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${name.replace(/\n/g, '\\n')}\nTEL;type=CELL;type=VOICE;waid=${x.split("@")[0]}:${PhoneNumber('+' + x).getNumber('international')}\nEND:VCARD`}) 
}
return await zyren.sendMessage(jid, {
contacts: {
displayName: `${vcard.length} Kontak`,
contacts: vcard,
...options
}
},
{
quoted,
...options
})
}
//=================================================//
zyren.setStatus = (status) => {
zyren.query({
tag: "iq",
attrs: {
to: "@s.whatsapp.net",
type: "set",
xmlns: "status",
},
content: [{
tag: "status",
attrs: {},
content: Buffer.from(status, "utf-8")
}]
})
return status
}
//=================================================//
zyren.serializeM = (m) => smsg(zyren, m, store)
//=================================================//
zyren.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = "";
let res = await axios.head(url)
mime = res.headers["content-type"]
if (mime.split("/")[1] === "gif") {
return zyren.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback:true, ...options}, { quoted: quoted, ...options})}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return zyren.sendMessage(jid, { document: await getBuffer(url), mimetype: "application/pdf", caption: caption, ...options}, { quoted: quoted, ...options })}
if(mime.split("/")[0] === "image"){
return zyren.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})}
if(mime.split("/")[0] === "video"){
return zyren.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: "video/mp4", ...options}, { quoted: quoted, ...options })}
if(mime.split("/")[0] === "audio"){
return zyren.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: "audio/mpeg", ...options}, { quoted: quoted, ...options })}
}
//=================================================//
zyren.sendListMsg = (jid, text = "", footer = "", title = "" , butText = "", sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections}
zyren.sendMessage(jid, listMes, { quoted: quoted })
}
//=================================================//
zyren.send5ButGif = async (id, text1, desc1, gam1, gam2, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
video: gam1, 
jpegThumbnail: gam2,
caption: text1, 
footer: desc1, 
gifPlayback: true 
}
return await zyren.sendMessage(id, listMessage, options)
}
//=================================================//
zyren.send5ButImg = async(id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = {
templateButtons: but,
image: gam1, 
caption: text1, 
footer: desc1 
}
return await zyren.sendMessage(id, listMessage, options)
}                
//=================================================//
zyren.send5ButLoc = async(id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
location: { jpegThumbnail: gam1 },
caption: text1, 
footer: desc1 
}
return await zyren.sendMessage(id, listMessage, options)
}
//=================================================//
zyren.send5ButVideo = async (id, text1, desc1, gam1, gam2, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
video: gam1, 
jpegThumbnail: gam2,
caption: text1, 
footer: desc1 
}
return await zyren.sendMessage(id, listMessage, options)
}
//=================================================//
zyren.sendButImage = async(id, text1, desc1, gam1, but = [], options1, options2 = {}) => {
let buttonMessage = {
image: gam1,
caption: text1,
footer: desc1,
buttons: but,
contextInfo: options1,
}
return await zyren.sendMessage(id, buttonMessage, options2)
}        
//=================================================//
zyren.sendButGif = async (id, text1, desc1, gam1, gam2, but = [], options = {}) => {
const buttonMessage = { 
buttons: but,
video: gam1, 
jpegThumbnail: gam2,
caption: text1, 
footer: desc1, 
gifPlayback: true, 
}
return await zyren.sendMessage(id, buttonMessage, options)
}    
//=================================================//
zyren.sendButVideo = async (id, text1, desc1, gam1, gam2, but = [], options = {}) => {
const listMessage = { 
buttons: but,
video: gam1, 
jpegThumbnail: gam2,
caption: text1, 
footer: desc1, 
}
return await zyren.sendMessage(id, listMessage, options)
}                        
//=================================================//
zyren.sendButLoc = async(id, text1, desc1, gam1, but = [], options) => {
let buttonMessage = {
location: { jpegThumbnail: gam1 } ,
caption: text1,
footer: desc1,
buttons: but,        
}
return await zyren.sendMessage(id, buttonMessage, options)
}
//=================================================//
zyren.send5ButMsg = (jid, text = "" , footer = "", but = []) =>{
let templateButtons = but
var templateMessage = {
text: text,
footer: footer,
templateButtons: templateButtons}
zyren.sendMessage(jid, templateMessage)
}
//=================================================//
zyren.sendButtonText = (jid, buttons = [], text, footer, quoted = "", options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options}
zyren.sendMessage(jid, buttonMessage, { quoted, ...options })
}
//=================================================//
zyren.sendButMessage = async (id, text1, desc1, but = [], options  ) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
return zyren.sendMessage(id, buttonMessage,{quoted: options})
}
//=================================================//
zyren.sendText = (jid, text, quoted = "", options) => zyren.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
zyren.sendImage = async (jid, path, caption = "", quoted = "", options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await zyren.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}
//=================================================//
zyren.sendVideo = async (jid, path, caption = "", quoted = "", gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await zyren.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}
//=================================================//
zyren.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await zyren.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}
//=================================================//
zyren.sendTextWithMentions = async (jid, text, quoted, options = {}) => zyren.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net") }, ...options }, { quoted })
//=================================================//
zyren.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
//=================================================//
await zyren.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
//=================================================//
zyren.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
//=================================================//
await zyren.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
//=================================================//
zyren.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//=================================================//
zyren.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ""
let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer
} 
//=================================================//
zyren.sendMedia = async (jid, path, fileName = "", caption = "", quoted = "", options = {}) => {
let types = await zyren.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = "", mimetype = mime, pathFile = filename
if (options.asDocument) type = "document"
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require("./lib/exif")
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = "sticker"
mimetype = "image/webp"}
else if (/image/.test(mime)) type = "image"
else if (/video/.test(mime)) type = "video"
else if (/audio/.test(mime)) type = "audio"
else type = "document"
await zyren.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}
//=================================================//
zyren.sendMediaV2 = async (jid, path, quoted, options = {}) => {
let { ext, mime, data } = await zyren.getFile(path)
messageType = mime.split("/")[0]
pase = messageType.replace('application', 'document') || messageType
return await zyren.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
}
//=================================================//
zyren.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await zyren.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
//=================================================//
zyren.cMod = (jid, copy, text = "", sender = zyren.user.id, options = {}) => {
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === "ephemeralMessage"
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === "string") msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== "string") msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === zyren.user.id
return proto.WebMessageInfo.fromObject(copy)
}
//=================================================//
zyren.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], "base64") : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === "string" ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: "application/octet-stream",
ext: ".bin"}
filename = path.join(__filename, "../mytzy/" + new Date * 1 + "." + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}
}
//=================================================//
zyren.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await zyren.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = "", mimetype = mime, pathFile = filename
if (options.asDocument) type = "document"
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require("../lib/sticker.js")
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = "sticker"
mimetype = "image/webp"}
else if (/image/.test(mime)) type = "image"
else if (/video/.test(mime)) type = "video"
else if (/audio/.test(mime)) type = "audio"
else type = "document"
await zyren.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
zyren.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + "@s.whatsapp.net")
}
//=================================================//
Object.defineProperty(zyren, "name", {
value: { ...(options.chats || {}) },
configurable: true,
})
if (zyren.user?.id) zyren.user.jid = zyren.decodeJid(zyren.user.id)
store.bind(zyren.ev)
return zyren
}
//=================================================//
exports.smsg = (conn, m, store) => {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => conn.downloadMediaMessage(m.quoted)
}
}
m.download = () => conn.downloadMediaMessage(m.msg)
m.text = m.msg || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)
return m
}