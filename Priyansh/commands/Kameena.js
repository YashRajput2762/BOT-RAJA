const fs = require("fs");
module.exports.config = {
	name: "YASH",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "KAMEENA", 
	description: "hihihihi",
	commandCategory: "+",
	usages: "owner",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Owner")==0 || event.body.indexOf("owner")==0 || event.body.indexOf("OWNER")==0 || event.body.indexOf("Boss") {
		var msg = {
				body: "💖💖😍☞KAMEENA BOT☜😍💖💖✧═════════•❁❀❁•═════════✧           💖   💖 ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-  ☞💖👑 𝗞𝗔𝗠𝗘𝗘𝗡𝗔 👑💖☜ ✧═════════•❁❀❁•═════════✧   💝🥀𝐎𝐖𝐍𝐄𝐑 :-☞💖👑 Kąmeeñå'bùt Çutë 👑💖☜ ✧═════════•❁❀❁•═════════✧                     💖💖☞︎𝙼𝙰𝚂𝚃𝙸 𝙺𝙰𝚁𝙾 𝙼𝙴𝚁𝙴 𝚂𝙰𝚃𝙷☜︎💖💖✧═════════•❁❀❁•═════════✧   𝙿𝙰𝙶𝙰𝙻 𝚃𝚄𝙼𝙰𝚁𝙰 𝙶𝙾𝙻𝚄 𝙼𝙾𝙻𝚄 𝙱𝙰𝙱𝚄 𝙷𝚄 𝙼𝙴✧═════════•❁❀❁•═════════✧    💖𝗢𝗪𝗡𝗘𝗥÷ 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗞𝗔𝗠𝗘𝗘𝗡𝗔💝💝💝 ✧═════════•❁❀❁•═════════✧      💖𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 :- 👇 https://www.facebook.com/profile.php?id=100088522539288 ✧═════════•❁❀❁•═════════✧ किसी भी तरह की हेल्प के लिए कांटेक्ट करे 👉 [+91 8094828237]",
        attachment: fs.createReadStream(__dirname + `/noprefix/FB_IMG_1733401436216.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
