module.exports = async(sock, m, prefix, command, mentionByTag) => {
const Nomernya = mentionByTag[0]
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `SECONDS`, rowId: `${prefix + command} ${Nomernya}|seconds`, description: `ADD OWNER SECONDS`},
{title: `MINUTES`, rowId: `${prefix + command} ${Nomernya}|minutes`, description: `ADD OWNER MINUTES`},
{title: `HOURS`, rowId: `${prefix + command} ${Nomernya}|hours`, description: `ADD OWNER HOURS`},
{title: `DAYS`, rowId: `${prefix + command} ${Nomernya}|days`, description: `ADD OWNER DAYS`},
{title: `WEEKS`, rowId: `${prefix + command} ${Nomernya}|weeks`, description: `ADD OWNER WEEKS`},
{title: `MONTHS`, rowId: `${prefix + command} ${Nomernya}|months`, description: `ADD OWNER MONTHS`},
{title: `PERMANENT`, rowId: `${prefix + command} ${Nomernya}|permanent`, description: `ADD OWNER PERMANENT`},
]}]
const listMessage = { text: `ADD OWNER`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}