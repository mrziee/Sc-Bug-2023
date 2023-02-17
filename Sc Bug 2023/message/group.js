const { getBuffer, reSize, getGroupAdmins } = require("../basetzy/lib/myfunc")
const { color } = require("../basetzy/lib/color");
const chalk = require('chalk')
const fs = require('fs')
module.exports = async(sock, anu) => {
try{

const from = anu.id
const botNumber = sock.decodeJid(sock.user.id)
const groupMet = await sock.groupMetadata(from)
const groupName = groupMet.subject  
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);
const pushname =  await sock.getName(mem)
const OneMem = anu.participants.length === 1
const NotMe = mem.includes(botNumber)
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const Promote = anu.action == 'promote'
const Demote = anu.action == 'demote'

try{
var setWelcome = db.data.settings[botNumner].setwelcome 
} catch {
var setWelcome = "image"
}
try{
var welcome = db.data.chats[from].welcome
} catch {
var welcome = false
}


const textWelcome = `
Halo @${memNumber}
Welcome in Gc ${groupName} 
jangan lupa baca dan following rules group
semoga Betah yak `

const textLeave = `Asik beban grup keluar \nKena mental dia :v`

const textPormote = `「 PROMOTE - DETECTED 」\n\nNama : ${pushname}\nNumber : @${memNumber}`

const textDemote = `「 DEMOTE - DETECTED 」\n\nNama : ${pushname}\nNumber : @${memNumber}`


try {
var pp_user = await sock.profilePictureUrl(mem, 'image')
} catch {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
  

//Button welcome
let buttonWelcome = [
{ buttonId: `y`, buttonText: { displayText: `INTRO DULU` }, type: 'RESPONSE' },
{ buttonId: `y`, buttonText: { displayText: `OKE SIAP` }, type: 'RESPONSE' },
]

//Button leave
let buttonLeave = [
{ buttonId: `y`, buttonText: { displayText: `NITIP GORENGAN` }, type: 'RESPONSE' },
{ buttonId: `y`, buttonText: { displayText: `GOD BEY` }, type: 'RESPONSE' },
]

//Button promote
let buttonPromote = [
{ buttonId: `y`, buttonText: { displayText: `SELAMAT KAK` }, type: 'RESPONSE' },
{ buttonId: `y`, buttonText: { displayText: `OK` }, type: 'RESPONSE' },
]

//Button demote
let buttonDemote = [
{ buttonId: `y`, buttonText: { displayText: `SABAR YA` }, type: 'RESPONSE' },
{ buttonId: `y`, buttonText: { displayText: `OK` }, type: 'RESPONSE' },
]


const sendButImage = async(id, text1, desc1, gam1, but = [], options = []) => {
let buttonMessage = {
mentions: options,
image: gam1,
caption: text1,
footer: desc1,
buttons: but
}
sock.sendMessage(id, buttonMessage)
} 

const sendButLoc = async(id, text1, desc1, gam1, but = [], options = []) => {
let buttonMessage = {
mentions: options,
location: { jpegThumbnail: gam1 },
caption: text1, 
footer: desc1,
buttons: but
}
sock.sendMessage(id, buttonMessage)
} 

const sendButGif = async(id, text1, desc1, gam1, but = [], options = []) => {
let buttonMessage = {
mentions: options,
video: thumbnailvid, 
jpegThumbnail: gam1,
caption: text1, 
footer: desc1, 
gifPlayback: true,
buttons: but
}
sock.sendMessage(id, buttonMessage)
} 

const sendButVideo = async(id, text1, desc1, gam1, but = [], options = []) => {
let buttonMessage = {
mentions: options,
video: thumbnailvid, 
jpegThumbnail: gam1,
caption: text1, 
footer: desc1, 
buttons: but
}
sock.sendMessage(id, buttonMessage)
} 


if (welcome) {
if (setWelcome == "image") {
if (Add && !NotMe) {
await sendButImage(from, textWelcome, footer, await getBuffer(pp_user), buttonWelcome, [mem])
} else if (Remove && !NotMe) {
await sendButImage(from, textLeave, footer, await getBuffer(pp_user), buttonLeave, [mem])
} else if (Promote && !NotMe) {
await sendButImage(from, textPormote, footer, await getBuffer(pp_user), buttonPromote, [mem])
} else if (Demote && !NotMe) {
await sendButImage(from, textDemote, footer, await getBuffer(pp_user), buttonDemote, [mem])
}
} else if (setWelcome == "location") {
if (Add && !NotMe) {
await sendButLoc(from, textWelcome, footer, await reSize(pp_user, 300, 300), buttonWelcome, [mem])
} else if (Remove && !NotMe) {
await sendButLoc(from, textLeave, footer, await reSize(pp_user, 300, 300), buttonLeave, [mem])
} else if (Promote && !NotMe) {
await sendButLoc(from, textPormote, footer, await reSize(pp_user, 300, 300), buttonPromote, [mem])
} else if (Demote && !NotMe) {
await sendButLoc(from, textDemote, footer, await reSize(pp_user, 300, 300), buttonDemote, [mem])
}
} else if (setWelcome == "gif") {
if (Add && !NotMe) {
await sendButGif(from, textWelcome, footer, await getBuffer(pp_user), buttonWelcome, [mem])
} else if (Remove && !NotMe) {
await sendButGif(from, textLeave, footer, await getBuffer(pp_user), buttonLeave, [mem])
} else if (Promote && !NotMe) {
await sendButGif(from, textPormote, footer, await getBuffer(pp_user), buttonPromote, [mem])
} else if (Demote && !NotMe) {
await sendButGif(from, textDemote, footer, await getBuffer(pp_user), buttonDemote, [mem])
}
} else if (setWelcome == "video") {
if (Add && !NotMe) {
await sendButVideo(from, textWelcome, footer, await getBuffer(pp_user), buttonWelcome, [mem])
} else if (Remove && !NotMe) {
await sendButVideo(from, textLeave, footer, await getBuffer(pp_user), buttonLeave, [mem])
} else if (Promote && !NotMe) {
await sendButVideo(from, textPormote, footer, await getBuffer(pp_user), buttonPromote, [mem])
} else if (Demote && !NotMe) {
await sendButVideo(from, textDemote, footer, await getBuffer(pp_user), buttonDemote, [mem])
}
}
}

//Group Update Console
if (Remove&& OneMem){
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mGROUP UPDATE\x1b[1;37m]'), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mGROUP UPDATE\x1b[1;37m]'), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}






  
} catch (err) {
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}







let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})