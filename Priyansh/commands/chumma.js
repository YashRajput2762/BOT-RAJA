const fs = require("fs");
module.exports.config = {
	name: "chumma",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐊𝐑𝐈𝐒𝐇𝐍𝐀", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("💋")==0) {
		var msg = {
				body: "😘 𝐇𝐀𝐘 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐔𝐌𝐌𝐌𝐀𝐀𝐀𝐇𝐇𝐇 😘😘😘😘😘",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
