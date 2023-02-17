module.exports = async(sock, m, prefix, command, text) => {
const Nomernya = text.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: "INVITE", rowId: `${prefix + command} ${Nomernya}|invite`, description: "SEND BUG INVITE"},
{title: "TROLI", rowId: `${prefix + command} ${Nomernya}|troli`, description: "SEND BUG TROLI"},
{title: "CATALOG", rowId: `${prefix + command} ${Nomernya}|catalog`, description: "SEND BUG CATALOG"},
{title: "LOCATION", rowId: `${prefix + command} ${Nomernya}|location`, description: "SEND BUG LOCATION"},
{title: "POLL", rowId: `${prefix + command} ${Nomernya}|poll`, description: "SEND BUG POLL"},
{title: "DOCUMENT", rowId: `${prefix + command} ${Nomernya}|document`, description: "SEND BUG DOCUMENT"},
{title: "PAYMENT", rowId: `${prefix + command} ${Nomernya}|payment`, description: "SEND BUG PAYMENT"},
{title: "AUDIO", rowId: `${prefix + command} ${Nomernya}|audio`, description: "SEND BUG AUDIO"},
{title: "STICKER", rowId: `${prefix + command} ${Nomernya}|sticker`, description: "SEND BUG STICKER"},
{title: "IMAGE", rowId: `${prefix + command} ${Nomernya}|image`, description: "SEND BUG IMAGE"},
{title: "VIDEO", rowId: `${prefix + command} ${Nomernya}|video`, description: "SEND BUG VIDEO"},
{title: "BUTTON", rowId: `${prefix + command} ${Nomernya}|button`, description: "SEND BUG BUTTON"},
{title: "SPAM", rowId: `${prefix + command} ${Nomernya}|spam`, description: "SEND BUG SPAM"},
]}]
const listMessage = { text: "SEND BUG", buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}