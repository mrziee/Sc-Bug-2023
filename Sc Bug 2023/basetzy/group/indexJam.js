const toMs = require("ms")
module.exports = async(sock, m, prefix, command) => {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: `1 JAM`, rowId: `${prefix + command} hours ${toMs("1hours")}`, description: `${command.toUpperCase()} 1 JAM`},
{title: `2 JAM`, rowId: `${prefix + command} hours ${toMs("2hours")}`, description: `${command.toUpperCase()} 2 JAM`},
{title: `3 JAM`, rowId: `${prefix + command} hours ${toMs("3hours")}`, description: `${command.toUpperCase()} 3 JAM`},
{title: `4 JAM`, rowId: `${prefix + command} hours ${toMs("4hours")}`, description: `${command.toUpperCase()} 4 JAM`},
{title: `5 JAM`, rowId: `${prefix + command} hours ${toMs("5hours")}`, description: `${command.toUpperCase()} 5 JAM`},
{title: `6 JAM`, rowId: `${prefix + command} hours ${toMs("6hours")}`, description: `${command.toUpperCase()} 6 JAM`},
{title: `7 JAM`, rowId: `${prefix + command} hours ${toMs("7hours")}`, description: `${command.toUpperCase()} 7 JAM`},
{title: `8 JAM`, rowId: `${prefix + command} hours ${toMs("8hours")}`, description: `${command.toUpperCase()} 8 JAM`},
{title: `9 JAM`, rowId: `${prefix + command} hours ${toMs("9hours")}`, description: `${command.toUpperCase()} 9 JAM`},
{title: `10 JAM`, rowId: `${prefix + command} hours ${toMs("10hours")}`, description: `${command.toUpperCase()} 10 JAM`},
{title: `11 JAM`, rowId: `${prefix + command} hours ${toMs("11hours")}`, description: `${command.toUpperCase()} 11 JAM`},
{title: `12 JAM`, rowId: `${prefix + command} hours ${toMs("12hours")}`, description: `${command.toUpperCase()} 12 JAM`},
{title: `13 JAM`, rowId: `${prefix + command} hours ${toMs("13hours")}`, description: `${command.toUpperCase()} 13 JAM`},
{title: `14 JAM`, rowId: `${prefix + command} hours ${toMs("14hours")}`, description: `${command.toUpperCase()} 14 JAM`},
{title: `15 JAM`, rowId: `${prefix + command} hours ${toMs("15hours")}`, description: `${command.toUpperCase()} 15 JAM`},
{title: `16 JAM`, rowId: `${prefix + command} hours ${toMs("16hours")}`, description: `${command.toUpperCase()} 16 JAM`},
{title: `17 JAM`, rowId: `${prefix + command} hours ${toMs("17hours")}`, description: `${command.toUpperCase()} 17 JAM`},
{title: `18 JAM`, rowId: `${prefix + command} hours ${toMs("18hours")}`, description: `${command.toUpperCase()} 18 JAM`},
{title: `19 JAM`, rowId: `${prefix + command} hours ${toMs("19hours")}`, description: `${command.toUpperCase()} 19 JAM`},
{title: `20 JAM`, rowId: `${prefix + command} hours ${toMs("20hours")}`, description: `${command.toUpperCase()} 20 JAM`},
{title: `21 JAM`, rowId: `${prefix + command} hours ${toMs("21hours")}`, description: `${command.toUpperCase()} 21 JAM`},
{title: `22 JAM`, rowId: `${prefix + command} hours ${toMs("22hours")}`, description: `${command.toUpperCase()} 22 JAM`},
{title: `23 JAM`, rowId: `${prefix + command} hours ${toMs("23hours")}`, description: `${command.toUpperCase()} 23 JAM`},
{title: `24 JAM`, rowId: `${prefix + command} hours ${toMs("24hours")}`, description: `${command.toUpperCase()} 24 JAM`},
]}]
const listMessage = { text: `${command.toUpperCase()} JAM`, buttonText: `Click Here`, sections }
sock.sendMessage(m.chat, listMessage, { quoted: m })
}