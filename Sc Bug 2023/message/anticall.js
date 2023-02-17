module.exports = async(sock, json) => {
const botNumber = sock.decodeJid(sock.user.id)
const callerId = json.content[0].attrs['call-creator']
try{
var ownerNumber = db.data.settings[botNumber].nomerowner
} catch {
var ownerNumber = nomerOwner
}
try{
var anticall = db.data.settings[botNumber].anticall
} catch {
var anticall = false
}
if (anticall && json.content[0].tag == 'offer') {
if (callerId.split("@")[0] == ownerNumber) return
setTimeout(() => {
sock.sendMessage(`${ownerNumber}@s.whatsapp.net`, { text: `Terdeteksi @${callerId.split("@")[0]} telah menelpon bot`, mentions: [callerId] })
}, 5000)
setTimeout(() => {
sock.updateBlockStatus(callerId, "block")
}, 2000)
setTimeout(() => {
sock.sendMessage(callerId, { text: "Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka!" })
}, 1000)
}
}