const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "KAMEENA", 
	description: "Just Respond",
	commandCategory: "ravi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("OWNER") ||
     react.includes("Owner") || react.includes("Malik") || react.includes("malik") ||
react.includes("Prefix") ||
react.includes(".prefix")) {
		var msg = {
				body: `💖KAMÉENA BRAND💖`,attachment: fs.createReadStream(__dirname + `/ravi/1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
