module.exports = async (zyren, m) => {
try{
//=================================================//
let botNumber = zyren.decodeJid(zyren.user.id)
let groupMetadata = m.isGroup? await zyren.groupMetadata(m.chat).catch(e => {}) : ""
let groupName = m.isGroup? groupMetadata.subject : ""
let isNumber = x => typeof x === "number" && !isNaN(x)
let users = global.db.data.users[m.sender]
let settings = db.data.settings[botNumber]
let chats = global.db.data.chats[m.chat]
//=================================================//
if (users) {
if (!("name" in users)) users.name = m.pushName
if (!isNumber(users.limit)) users.limit = 100
if (!isNumber(users.monay)) users.monay = 0
if (!isNumber(users.darah)) users.darah = 100
if (!isNumber(users.besi)) users.besi = 5
if (!isNumber(users.emas)) users.emas = 1
if (!isNumber(users.emerald)) users.emerald = 1
if (!isNumber(users.umpan)) users.umpan = 1
if (!isNumber(users.potion)) users.potion = 1
if (!isNumber(users.ikan)) users.ikan = 0
if (!isNumber(users.ayam)) users.ayam = 0
if (!isNumber(users.kelinci)) users.kelinci = 0
if (!isNumber(users.domba)) users.domba = 0
if (!isNumber(users.sapi)) users.sapi = 0
if (!isNumber(users.gajah)) users.gajah = 0
if (!("delete" in users)) users.delete = {
type: "", 
text: "",
url: "", 
}
} else global.db.data.users[m.sender] = {
name: m.pushName,
limit: 100,
monay: 0,
darah: 100,
besi: 5,
emas: 1,
emerald: 1,
umpan: 1,
potion: 1,
ikan: 0, 
ayam: 0, 
kelinci: 0, 
domba: 0, 
sapi: 0,
gajah: 0,
delete: {
type: "", 
text: "",
url: "", 
}, 
}
//=================================================//
if (m.isGroup && chats) {
if (!("name" in chats)) chats.name = groupNmae
if (!("antilink" in chats)) chats.antilink = false
if (!("antilinkgc" in chats)) chats.antilinkgc = false
if (!("antilinkytchannel" in chats)) chats.antilinkytchannel = false
if (!("antilinkytvideo" in chats)) chats.antilinkytvideo = false
if (!("antilinkfb" in chats)) chats.antilinkfb = false
if (!("antilinkig" in chats)) chats.antilinkig = false
if (!("antilinktele" in chats)) chats.antilinktele = false
if (!("antilinkwa" in chats)) chats.antilinkwa = false
if (!("antilinktiktok" in chats)) chats.antilinktiktok = false
if (!("antilinktwitter" in chats)) chats.antilinktwitter = false
if (!("antivirtex" in chats)) chats.antivirtex = false
if (!("antiasing" in chats)) chats.antiasing = false
if (!("antitag" in chats)) chats.antitag = false
if (!("antidelete" in chats)) chats.antidelete = false
if (!("antiviewonce" in chats)) chats.antiviewonce = false
if (!("antitoxic" in chats)) chats.antitoxic = false
if (!("antisange" in chats)) chats.antisange = false
if (!("antinsfw" in chats)) chats.antinsfw = false
if (!("autorespongc" in chats)) chats.autorespongc = false
if (!("autoreact" in chats)) chats.autoreact = false
if (!("autobugreact" in chats)) chats.autobugreact = false
if (!("mute" in chats)) chats.mute = false
if (!("welcome" in chats)) chats.welcome = false
if (!("culik" in chats)) chats.culik = {
status: false, 
penculik: "", 
member: []
}
} else if (m.isGroup) global.db.data.chats[m.chat] = {
name: groupName,
antilink: false,
antilinkgc: false,
antilinkytchannel: false,
antilinkytvideo: false,
antilinkfb: false,
antilinkig: false,
antilinktele: false,
antilinkwa: false,
antilinktiktok: false,
antilinktwitter: false,
antivirtex: false,
antiasing: false,
antitag: false,
antidelete: false,
antiviewonce: false,
antitoxic: false,
antisange: false,
antinsfw: false,
autorespongc: false,
autoreact: false,
autobugreact: false,
mute: false,
welcome: false,
culik: {
status: false,
penculik: "", 
member: []
}, 
}
//=================================================//
if (settings) {
if (!("nomerowner" in settings)) settings.nomerowner = nomerOwner
if (!("namaowner" in settings)) settings.namaowner = namaOwner
if (!("copyright" in settings)) settings.copyright = footer
if (!("setmenu" in settings)) settings.setmenu = "image"
if (!("setwelcome" in settings)) settings.setwelcome = "image"
if (!("replytype" in settings)) settings.replytype = "web1"
if (!("auto" in settings)) settings.auto = "recording"
if (!("anticall" in settings)) settings.anticall = false
if (!("public" in settings)) settings.public = true
if (!("autovn" in settings)) settings.autovn = false
if (!("autosticker" in settings)) settings.autosticker = false
if (!("autorespon" in settings)) settings.autorespon = false
if (!("autoread" in settings)) settings.autoread = false
if (!("autobug" in settings)) settings.autobug = {
status: false, 
expired: 0
}
} else db.data.settings[botNumber] = {
nomerowner: nomerOwner, 
namaowner: namaOwner, 
copyright: footer, 
setmenu: "image", 
setwelcome: "image", 
replytype: "web1",
auto: "recording",
anticall: false, 
public: true,
autovn: false,
autosticker: false,
autorespon: false, 
autoread: false, 
autobug: {
status: false, 
expired: 0
}
}
//=================================================//
} catch (err) {
console.log(err)
}
}