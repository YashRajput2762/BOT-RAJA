module.exports.config = {
  name: "mention-bot",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "Ravi kumar",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "system",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61563280496378") {
    var aid = ["61563280496378" , "61554865056900" , "61563280496378"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["🍒🍒🍒...𝐌𝐄 𝐉𝐀𝐍𝐔 𝐊𝐄 𝐒𝐀𝐓𝐇 𝐁𝐔𝐒𝐘 𝐇𝐔 , 𝐌𝐔𝐉𝐇𝐑 𝐊𝐘𝐎 𝐁𝐔𝐋𝐀 𝐑𝐄𝐇𝐄 𝐇𝐎...😒😒👈" , "🍒🍓🍓....𝐀𝐁𝐄 𝐌𝐄 𝐁𝐎𝐓 𝐇𝐔 𝐌𝐔𝐉𝐇𝐄 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎....🥺🥺🥺👈" , "🍓🍓🍒....𝐃𝐈𝐌𝐀𝐆 𝐌𝐀𝐓 𝐊𝐇𝐀𝐎D....😬😬😬😬👈" , "🍓🍓🍓....𝐊𝐘𝐀 𝐇𝐔𝐀 𝐉𝐀𝐍𝐔 𝐌𝐔𝐉𝐇𝐄 𝐁𝐔𝐋𝐀𝐘𝐀...🙃🙃🙂" , "🍓🍓🍓....𝐊𝐎𝐈 𝐊𝐀𝐌 𝐍𝐇𝐈 𝐇𝐀𝐈 𝐊𝐔𝐀 𝐓𝐔𝐉𝐇𝐄...😒😒😒👈" , "🍒🍒🍒....𝐁𝐎𝐋𝐎 𝐍𝐀 𝐁𝐀𝐁𝐔...😀😀😀👈" , "🍇🍇....𝐌𝐄𝐑𝐈 𝐘𝐀𝐃 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐓𝐔𝐌𝐇𝐄 𝐈𝐓𝐍𝐈 𝐀𝐂𝐇𝐇𝐈 𝐇𝐔 𝐌𝐄...🙈🙈🙈👈" , "🍒🍒🍓....𝐇𝐀 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍...😍😘😘😙" , "🍓🍓🍒...𝐌𝐔𝐉𝐇𝐄 𝐌𝐀𝐓 𝐁𝐔𝐋𝐀𝐘𝐀 𝐊𝐀𝐑𝐎...🙄🙄🙄👈" , "🍒🍒🍒.....𝐓𝐄𝐑𝐀 𝐒𝐀𝐑 𝐅𝐎𝐃 𝐃𝐔𝐍𝐆𝐈 𝐌𝐄 , 𝐁𝐀𝐑 𝐁𝐀𝐑 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐌𝐀𝐑 𝐊𝐀𝐑𝐎...😒😒😒👈" , "🍓🍓🍓....𝐄𝐊 𝐁𝐀𝐑 𝐌𝐄 𝐒𝐀𝐌𝐀𝐉𝐇 𝐍𝐇𝐈 𝐀𝐀𝐓𝐀 𝐓𝐔𝐉𝐇𝐄 𝐊𝐘𝐀 𝐌𝐄𝐑𝐈 𝐁𝐀𝐀𝐓 , 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐀𝐑 𝐁𝐀𝐑 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐊𝐀𝐑𝐓𝐄 𝐇𝐎...😒😒😒😒👈" , "🍓🍓🍓...𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 𝐉𝐀𝐃𝐀 𝐏𝐀𝐑𝐄𝐃𝐇𝐀𝐍 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 𝐍𝐀...😒😒😒" , "🍓🍓🍓...𝐌𝐔𝐉𝐇𝐄 𝐁𝐔𝐋𝐀𝐘𝐀 𝐊𝐘𝐀...🙂🙂🙂👈" , "🍒🍒🍒🍒....𝐘𝐀𝐑 𝐌𝐄 𝐊𝐇𝐀𝐍𝐀 𝐁𝐀𝐍𝐀 𝐑𝐀𝐇𝐈 𝐇𝐔 𝐀𝐁𝐇𝐈 𝐈 𝐀𝐌 𝐁𝐔𝐒𝐘...🙃🙃👈" , "🍒🍒🍒🍒....𝐊𝐘𝐀 𝐊𝐀𝐀𝐌 𝐇𝐄 𝐁𝐀𝐁𝐔...🥱🥱👈" , "🍒🍒🍒...𝐁𝐀𝐁𝐔 𝐌𝐄𝐑𝐄 𝐒𝐀𝐑 𝐃𝐀𝐑𝐃 𝐇𝐎 𝐑𝐀𝐇𝐀 𝐇...🥺🥺🥺👈"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }