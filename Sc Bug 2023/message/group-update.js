const { getBuffer } = require("../basetzy/lib/myfunc")
const { color } = require("../basetzy/lib/color");
const chalk = require('chalk')
const fs = require('fs')
module.exports = async(sock, anu) => {
try {
const from = anu.id
const botNumber = sock.decodeJid(sock.user.id)
const groupMet = await sock.groupMetadata(from)
const groupName = groupMet.subject  

const sendMessage = async(id, text1, gam1) => {
sock.sendMessage(id, { 
contextInfo: { externalAdReply: { 
showAdAttribution: true, 
title: `Group Settings Change`, 
body: 'DONT CLICK HERE', 
previewType: 'PHOTO', 
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: gam1, 
sourceUrl: `http://youtube.com/@dvsharkyt`}}, 
text: text1 })
}


try {
var pp_grup = await sock.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

if (anu[0].announce == true) {
sendMessage(from, `「 *Group Settings Change* 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group telah ditutup oleh admin`,`green`))
} else if(anu[0].announce == false) {
sendMessage(from, `「 *Group Settings Change* 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group telah dibuka oleh admin`,`green`))
} else if (anu[0].restrict == true) {
sendMessage(from, `「 *Group Settings Change* 」\n\nInfo group telah ditutup, Sekarang peserta tidak dapat mengedit info group !`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Info group telah ditutup`,`green`))
} else if (anu[0].restrict == false) {
sendMessage(from, `「 *Group Settings Change* 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Info group telah dibuka`,`green`))
} else {
sendMessage(from, `「 *Group Settings Change* 」\n\nGroup Subject telah diganti menjadi *${groupName}*`, await getBuffer(pp_grup))
console.log(color("[GRUP UPDATE]", "magenta"), color(`Group Subject telah diganti`,`green`))
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