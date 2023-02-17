/*
› Create By Kizyy Pak - Tzy
› Base Ori Radit

🔥 KALAU MAU RENAME TARO CREDITS GUA : Melliafriska */
// Minimal subscribe lh biar tambh serius ngonten🗿
require("./basetzy/lib/database") 
require("./thetzy")
const { default: makeWASocket, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require("pino")
const { Boom } = require("@hapi/boom")
const fs = require("fs")
const figlet = require("figlet")
const chalk = require("chalk")
const path = require("path")
const axios = require("axios")
const { start, success, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require("./basetzy/lib/myfunc")
const { color } = require("./basetzy/lib/color") 
const { jadibot } = require("./basetzy/lib/jadibot")
const base = require("./basetzy/lib/base") 
const moment = require("moment-timezone")
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss")			
const wita = moment.tz("Asia/Makassar").format("HH:mm:ss")			
const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss")
//=================================================//
var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}

switch(bulan1) { 
case 0: bulan1 = "Fanuari"; break;
case 1: bulan1 = "Februari"; break; 
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break; 
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break; 
}

switch(jams){
case 0: jams = "Malem"; break;
case 1: jams = "Malem"; break;
case 2: jams = "Malem"; break;
case 3: jams = "Pagi"; break;
case 4: jams = "Pagi"; break;
case 5: jams = "Pagi"; break;
case 6: jams = "Pagi"; break;
case 7: jams = "Pagi"; break;
case 8: jams = "Pagi"; break;
case 9: jams = "Pagi"; break;
case 10: jams = "Pagi"; break;
case 11: jams = "Siang"; break;
case 12: jams = "Siang"; break;
case 13: jams = "Siang"; break;
case 14: jams = "Siang"; break;
case 15: jams = "Sore"; break;
case 16: jams = "Sore"; break;
case 17: jams = "Sore"; break;
case 18: jams = "Malem"; break;
case 19: jams = "Malem"; break;
case 20: jams = "Malem"; break;
case 21: jams = "Malem"; break;
case 22: jams = "Malem"; break;
case 23: jams = "Malem"; break;
}

var tampilHari = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun; 
var tampilJam = "" + "Jams : " + jams + ":" + menit + ":" + detik + " Wib";
var tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
var tampilWaktu = jams + ":" + menit + ":" + detik;

var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 1: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 2: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 3: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 4: waktoonyabro = "Selamat Pagi Owner..✨"; break; 
case 5: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 6: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 7: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 8: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 9: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 10: waktoonyabro = "Selamat Pagi Owner..✨"; break;
case 11: waktoonyabro = "Selamat Siang Owner..🔥"; break; 
case 12: waktoonyabro = "Selamat Siang Owner..🔥"; break;
case 13: waktoonyabro = "Selamat Siang Owner..🔥"; break;
case 14: waktoonyabro = "Selamat Siang Owner..🔥"; break;
case 15: waktoonyabro = "Selamat Sore Owner..🌇"; break;
case 16: waktoonyabro = "Selamat Sore Owner..🌇"; break;
case 17: waktoonyabro = "Selamat Sore Owner..🌇"; break;
case 18: waktoonyabro = "Selamat Malam Owner..🌃"; break; 
case 19: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 20: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 21: waktoonyabro = "Selamat Malam Owner..🌃"; break;
case 22: waktoonyabro = "Selamat Malam Owner..🌃"; break; 
case 23: waktoonyabro = "Selamat Malam Owner..🌃"; break;
}

var tampilUcapan = "" + waktoonyabro;   
//=================================================//
const connectToWhatsApp = async() => {
const session = require("@adiwajshing/baileys").useMultiFileAuthState
const { state, saveCreds } = await session("./sessionye")


const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) })

console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,"cyan"))
console.log(color(figlet.textSync("Mr Ziee ぜ", {
font: "Standard",
horizontalLayout: "default",
vertivalLayout: "default",
width: 80,
whitespaceBreak: false
}), "blue"))
console.log(color("\n> WIB ","silver"), color(`${time}`,"mediumseagreen"))
console.log(color("> WITA ","silver"), color(`${wita}`,"mediumseagreen"))
console.log(color("> WIT ","silver"), color(`${wit}`,"mediumseagreen"))
console.log(color("> HARI ","silver"), color(`${tampilHari}\n`,"mediumseagreen"))

const connectionOptions = {
logger: pino({ level: "silent" }),
printQRInTerminal: true,
browser: ["Mr Ziee","Safari","1.0.0"],
auth: state
}
const zyren = base.makeWASocket(connectionOptions)
//=================================================//
const listJadibot = fs.readdirSync("./jadibot-sesion")
const sessionJadiBot = listJadibot.splice("@adiwajshing", listJadibot.length - 1).map(v => v.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
if (sessionJadiBot.length > 0) {
for (let path of sessionJadiBot) {
jadibot(zyren, path)
}
}
//=================================================//
store.bind(zyren.ev)
//=================================================//
zyren.ev.on("messages.upsert", async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === "ephemeralMessage") ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === "status@broadcast") return
if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return
m = base.smsg(zyren, mek, store)
require("./message/zyren")(zyren, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})
//=================================================//
zyren.ev.on("groups.update", async (anu) => {
require("./message/group-update.js")(zyren, anu)
}) 
//=================================================//
zyren.ev.on("group-participants.update", async (anu) => {
require("./message/group.js")(zyren, anu)
})
//=================================================//
zyren.ws.on('CB:call', async (json) => {
require('./message/anticall')(zyren, json)
})
//=================================================//
zyren.ev.on("contacts.update", update => {
for (let contact of update) {
let id = zyren.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}
})
//=================================================//
zyren.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update
if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
} else if (connection === "close") {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); zyren.logout(); 
} else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); process.exit() 
} else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); process.exit() 
} else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); zyren.logout(); 
} else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); zyren.logout(); 
} else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); await connectToWhatsApp() 
} else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); connectToWhatsApp() 
} else zyren.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})
//=================================================//
zyren.ev.on("creds.update", saveCreds)
return zyren
}
connectToWhatsApp()
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
