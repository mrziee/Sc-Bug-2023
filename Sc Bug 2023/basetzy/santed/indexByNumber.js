module.exports = async(sock, m, prefix, command, text) => {
const Nomernya = text.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
const sections = [ {
title: "PLEASE SELECT",
rows: [
{title: "DETIK", rowId: `${prefix + command} ${Nomernya}|detik`, description: "SANTED DETIK"},
{title: "MENIT", rowId: `${prefix + command} ${Nomernya}|menit`, description: "SANTED MENIT"},
{title: "JAM", rowId: `${prefix + command} ${Nomernya}|jam`, description: "SANTED JAM"},
{title: "HARI", rowId: `${prefix + command} ${Nomernya}|hari`, description: "SANTED HARI"},
]}]
const listMessage = { text: "SANTED", buttonText: "FOUND", sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}