const toMs = require("ms")
module.exports = async(sock, m, prefix, command) => {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 HARI`, rowId: `${prefix + command} days ${toMs("1days")}`, description: `${command.toUpperCase()} 1 HARI`},
{title: `2 HARI`, rowId: `${prefix + command} days ${toMs("2days")}`, description: `${command.toUpperCase()} 2 HARI`},
{title: `3 HARI`, rowId: `${prefix + command} days ${toMs("3days")}`, description: `${command.toUpperCase()} 3 HARI`},
{title: `4 HARI`, rowId: `${prefix + command} days ${toMs("4days")}`, description: `${command.toUpperCase()} 4 HARI`},
{title: `5 HARI`, rowId: `${prefix + command} days ${toMs("5days")}`, description: `${command.toUpperCase()} 5 HARI`},
{title: `6 HARI`, rowId: `${prefix + command} days ${toMs("6days")}`, description: `${command.toUpperCase()} 6 HARI`},
{title: `7 HARI`, rowId: `${prefix + command} days ${toMs("7days")}`, description: `${command.toUpperCase()} 7 HARI`},
]}]
const listMessage = { text: `${command.toUpperCase()} HARI`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}