module.exports = async(sock, m, prefix, command, text) => {
let ano = text.split("|")[0].split(`https://chat.whatsapp.com/`)[1]
let nana = await sock.groupAcceptInvite(ano)
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "INVITE", rowId: `${prefix + command} ${nana}|invite`, description: "SEND BUG INVITE"},
{title: "TROLI", rowId: `${prefix + command} ${nana}|troli`, description: "SEND BUG TROLI"},
{title: "CATALOG", rowId: `${prefix + command} ${nana}|catalog`, description: "SEND BUG CATALOG"},
{title: "LOCATION", rowId: `${prefix + command} ${nana}|location`, description: "SEND BUG LOCATION"},
{title: "POLL", rowId: `${prefix + command} ${nana}|poll`, description: "SEND BUG POLL"},
{title: "DOCUMENT", rowId: `${prefix + command} ${nana}|document`, description: "SEND BUG DOCUMENT"},
{title: "PAYMENT", rowId: `${prefix + command} ${nana}|payment`, description: "SEND BUG PAYMENT"},
{title: "AUDIO", rowId: `${prefix + command} ${nana}|audio`, description: "SEND BUG AUDIO"},
{title: "STICKER", rowId: `${prefix + command} ${nana}|sticker`, description: "SEND BUG STICKER"},
{title: "IMAGE", rowId: `${prefix + command} ${nana}|image`, description: "SEND BUG IMAGE"},
{title: "VIDEO", rowId: `${prefix + command} ${nana}|video`, description: "SEND BUG VIDEO"},
{title: "BUTTON", rowId: `${prefix + command} ${nana}|button`, description: "SEND BUG BUTTON"},
{title: "SPAM", rowId: `${prefix + command} ${nana}|spam`, description: "SEND BUG SPAM"},
]}]
const listMessage = { text: "SEND BUG GROUP", buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}