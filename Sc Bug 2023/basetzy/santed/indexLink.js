module.exports = async(sock, m, prefix, command, text) => {
let ano = text.split("|")[0].split(`https://chat.whatsapp.com/`)[1]
let nana = await sock.groupAcceptInvite(ano)
const sections = [ {
title: "PLEASE SELECT",
rows: [
{title: "DETIK", rowId: `${prefix + command} ${nana}|detik`, description: "SANTED GROUP DETIK"},
{title: "MENIT", rowId: `${prefix + command} ${nana}|menit`, description: "SANTED GROUP MENIT"},
{title: "JAM", rowId: `${prefix + command} ${nana}|jam`, description: "SANTED GROUP JAM"},
{title: "HARI", rowId: `${prefix + command} ${nana}|hari`, description: "SANTED GROUP HARI"},
]}]
const listMessage = { text: "SANTED GROUP", buttonText: "FOUND", sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}