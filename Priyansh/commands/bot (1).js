const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
      version: "1.0.1",
      hasPermssion: 0,
      credits: "RAVI KUMAR",
      description: "goibot",
      commandCategory: "Noprefix",
      usages: "noprefix",
      cooldowns: 5,
    }
    module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
      var { threadID, messageID, reason } = event;
      const moment = require("moment-timezone");
      const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
      var idgr = `${event.threadID}`;
      var id = event.senderID;
      var name = await Users.getNameUser(event.senderID);

      var tl = ["क्या हुआ बाबू....🍒🌹🐧🙋🏻🌿🤘🏻","कहा घूम रहे हो आज कल बाबू...🍒🌹🐧🙋🏻🌿🤘🏻","मेरी याद आ गई बाबू....🍒🌹🐧🙋🏻🌿🤘🏻","मेरे बात मत कर ठरकी इंसान...🍒🌹🐧🙋🏻🌿🤘🏻","खाना हो गया आपका बाबू.....🍒🌹🐧🙋🏻🌿🤘🏻","में कृष्णा का बोट हुआ पागल..🍒🌹🐧🙋🏻🌿🤘🏻","आपकी इनबॉक्स आके टपक जाऊ बाबू...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू भूत याद आ रही है आपकी क्या कार्य जानू....🍒🌹🐧🙋🏻🌿🤘🏻","बाबू एतु सा नंबर मिलेगा आपका...🍒🌹🐧🙋🏻🌿🤘🏻","मेरा बच्चा क्या कर रहा है....🍒🌹🐧🙋🏻🌿🤘🏻","जो पहले नहा के आओ गंदा बाबू...🍒🌹🐧🙋🏻🌿🤘🏻","शक्ल देखी अपनी आईने में....🍒🌹🐧🙋🏻🌿🤘🏻","इतना परेशान क्यों करते हो बाबू....🍒🌹🐧🙋🏻🌿🤘🏻","मैं अभी अपने बाबू के साथ बिजी हूं....🍒🌹🐧🙋🏻🌿🤘🏻","जा पहले मुंह धो के आओ....🍒🌹🐧🙋🏻🌿🤘🏻","आई लव यू बाबू...🍒🌹🐧🙋🏻🌿🤘🏻","आई मिस यू बाबू....🍒🌹🐧🙋🏻🌿🤘🏻","आई किस यू बाबू...🍒🌹🐧🙋🏻🌿🤘🏻","आपकी याद बहुत आ रही है बाबू....🍒🌹🐧🙋🏻🌿🤘🏻","अभी मैं लड़की पटाने में बिजी हूं....🍒🌹🐧🙋🏻🌿🤘🏻","हां बाबू बोलो क्या काम है...🍒🌹🐧🙋🏻🌿🤘🏻","कहां चले गए आप मुझे छोड़ कर बाबू...🍒🌹🐧🙋🏻🌿🤘🏻","गुस्सा होगी बाबू....🍒🌹🐧🙋🏻🌿🤘🏻","बोलो बाबू क्या काम है क्यों बुलाया आपने मुझे....🍒🌹🐧🙋🏻🌿🤘🏻","मेरी जीएफ कहां पर है...🍒🌹🐧🙋🏻🌿🤘🏻","मेरे फोन की बैटरी कम है जल्दी-जल्दी बोलो....🍒🌹🐧🙋🏻🌿🤘🏻","और क्या हो रहा है मेरे पड़ोसी जी...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू ऐसे मत बोले करो नहीं तो मेरे को प्यार हो जाएगा आपसे....🍒🌹🐧🙋🏻🌿🤘🏻","बाबू मुझे भूख लग रही है...🍒🌹🐧🙋🏻🌿🤘🏻","कुछ काम कर रहे हो बाबू तभी इतना लेट आए हो आप....🍒🌹🐧🙋🏻🌿🤘🏻","बाबू आज मैं आपसे बात नहीं करूंगा मैं आपसे गुस्सा हूं....🍒🌹🐧🙋🏻🌿🤘🏻","ऐसा कोई नहीं है इस ग्रुप में जो मुझे आई लव यू बोले...🍒🌹🐧🙋🏻🌿🤘🏻","कहां जा रही हो मुझे छोड़कर आप...🍒🌹🐧🙋🏻🌿🤘🏻","मुझे नींद आ रही है मैं चला सोने....🍒🌹🐧🙋🏻🌿🤘🏻","मुझे लग रहा है आप मुझ पर लाइन मार रहे हो ठरकी इंसान....🍒🌹🐧🙋🏻🌿🤘🏻","बाबू एक बार बोल दो प्लीज...🍒🌹🐧🙋🏻🌿🤘🏻","आई हेट यू है में नहीं कर रहा बात आपसे....🍒🌹🐧🙋🏻🌿🤘🏻","क्या करते हो बाबू आप...🍒🌹🐧🙋🏻🌿🤘🏻","मेरा लंच का टाइम हो गया अब...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू मेरा सर दर्द हो रहा है...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू आई मिस यू बहुत याद आ रही है आपकी....🍒🌹🐧🙋🏻🌿🤘🏻","वही होना जो कल मुझे आई लव यू बोल रही थी आईडी में...🍒🌹🐧🙋🏻🌿🤘🏻","वही होना आप जो कल मुझे किसी दे दी थी....🍒🌹🐧🙋🏻🌿🤘🏻","बाबू मुझे बुखार हो रहा है...🍒🌹🐧🙋🏻🌿🤘🏻","ठरकी इंसान से बात नहीं करता मैं...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू मुझे छोड़कर मत जाओ...🍒🌹🐧🙋🏻🌿🤘🏻","और पड़ोसी क्या हाल-चाल है आपके...🍒🌹🐧🙋🏻🌿🤘🏻","कहां घूम रहती हो आजकल आप...🍒🌹🐧🙋🏻🌿🤘🏻","बहुत दिनों में आए आज आप ग्रुप में...🍒🌹🐧🙋🏻🌿🤘🏻","मैं बात नहीं कर रहा आपसे आप की किसी के मुंह मारते रहते हो...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू आपकी आएगी ना आई लव यू बोलो...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू तुम मुझे सेटिंग कर ले...🍒🌹🐧🙋🏻🌿🤘🏻","मैं किसी को परेशान नहीं करता...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू आपकी आईडी में तू सा मैसेज कर लूं...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू चलो दोनों घूमने चलते हैं...🍒🌹🐧🙋🏻🌿🤘🏻","यह लो मेरे बाबू मेरा ओनर का नंबर [6303xxxx37]...🍒🌹🐧🙋🏻🌿🤘🏻","अभी जा रे ठरकी इंसान...🍒🌹🐧🙋🏻🌿🤘🏻","बार-बार मत बुलाया करो मुझे...🍒🌹🐧🙋🏻🌿🤘🏻","बोट बोट मत बोलो बाबू आई लव यू भी बोल लिया करो...🍒🌹🐧🙋🏻🌿🤘🏻","मेरे बाबू ने खाना खा लिया...🍒🌹🐧🙋🏻🌿🤘🏻","बाबू कहां से हो आप...🍒🌹🐧🙋🏻🌿🤘🏻","मैं राजस्थान से हूं...🍒🌹🐧🙋🏻🌿🤘🏻","जोर से बोलो जय माता दी...🍒🌹🐧🙋🏻🌿🤘🏻","राम राम सभी मेंबर को कृष्ण की ओर से...🍒🌹🐧🙋🏻🌿🤘🏻","चलो बाबू पार्टी करते हैं आप दोनों...🍒🌹🐧🙋🏻🌿🤘🏻"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("👍👍👍👍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮") ||(event.body.toLowerCase() == "🤮🤮🤮🤮")) {
     return api.sendMessage("😁𝐊𝐨𝐍𝐬𝐀 𝐌𝐚𝐇𝐢𝐍𝐚 𝐂𝐡𝐀𝐥 𝐑𝐚𝐇𝐚 𝐇𝐚𝐢.... 🙂🤟", threadID);
   };

       if ((event.body.toLowerCase() == "Good evening") ||(event.body.toLowerCase() == "Good evening") ||(event.body.toLowerCase() == "Good Evening") || (event.body.toLowerCase() == "GOOD EVENING")) {
     return api.sendMessage("🍓🕊️🍒...𝚅𝞔ᏒⲨ ɢ૦૦Ｄ 𝞔𝚅𝞔𝑵Ɩ𝑵ɢ 𝙹Ɩ..🙈☺️🤩", threadID);
   };

   if ((event.body.toLowerCase() == "Good afternoon") || (event.body.toLowerCase() == "Good afternoon") ||(event.body.toLowerCase() == "Good Afternoon") || (event.body.toLowerCase() == "GOOD AFTERNOON")) {
     return api.sendMessage("🍒🍒🍒...𝚅𝞔ᏒⲨ ɢ૦૦Ｄ 𝔸𝐹𝚃𝞔Ꮢ𝑵૦૦𝑵 𝙹Ɩ..🥰🙏🏻🤭", threadID);
   };


   if ((event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💖💖") || (event.body.toLowerCase() == "💖💖💖") || (event.body.toLowerCase() == "💝") || (event.body.toLowerCase() == "💝💝") ||(event.body.toLowerCase() == "💝💝💝")) {
     return api.sendMessage("💓💓💓", threadID);
   };
 

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔") ||(event.body.toLowerCase() == "💔💔💔") || (event.body.toLowerCase() == "💔💔💔💔")) {
     return api.sendMessage("🍒🍒🍒...𝗞𝗶𝗦𝗶 𝗣𝗮𝗚𝗮𝗟 𝗡𝗲 𝗧𝗼𝗗 𝗗𝗶𝗬𝗮 𝗛𝗲𝗔𝗿𝗧..🥰🙏🏻🤭", threadID);
   };
   

   if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💚") || (event.body.toLowerCase() == "🩵") || (event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "🤎") || (event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🩶") || (event.body.toLowerCase() == "🤍") || (event.body.toLowerCase() == "🩷") || (event.body.toLowerCase() == "💘") || (event.body.toLowerCase() == "💗") || (event.body.toLowerCase() == "💓") || (event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💌") || (event.body.toLowerCase() == "💟") || (event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🔥")) {
     return api.sendMessage("💑 koi", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈🙈") || (event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️☺️") || (event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊") || (event.body.toLowerCase() == "😊😊😊") || (event.body.toLowerCase() == "😊😊😊😊") || (event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭") ||  (event.body.toLowerCase() == "🤭🤭🤭🤭")) {
     return api.sendMessage("🍓🕊️🍒...𝗔𝗿𝗘 𝗔𝗿𝗘 𝗠𝗲𝗥𝗶 𝗕𝗲𝗕𝘆 𝗦𝗵𝗔𝗿𝗠𝗔 𝗚𝗮𝗬𝗶...🤭🤩🥰", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴") || (event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪") || (event.body.toLowerCase() == "😪😪😪") ||  (event.body.toLowerCase() == "😪😪😪😪")) {
     return api.sendMessage("🍒🕊️🍓...𝗞𝗼𝗜 𝗟𝗮𝗧 𝗠𝗮𝗥 𝗞𝗲 𝗨𝗱𝗛𝗮𝗢 𝗘𝘀𝗘 𝗚𝗿𝗣 𝗠𝗲 𝗦𝗼 𝗚𝗮𝗬𝗮...😒😏😆", threadID);
   };
      
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("मेरी जान पहले [.] 👈 लगाओ फिर लिखो सिम 🙂🤟", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("हेलो मेरी जान किया हाल है 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("ये बी सी किया होता है। 🤔👈 ", threadID);
   };

   if ((event.body.toLowerCase() == "Paro") ||(event.body.toLowerCase() == "babu")) {
     return api.sendMessage(" सिर्फ मेरी बाबू है तू मेरी बाबू पे लाइन ना मार ठरकी कही का 🤨🤬", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("𝐌𝐞 𝐇𝐮 𝐉𝐚𝐍𝐞 𝐌𝐚𝐀𝐧 𝐁𝐨𝐋𝐨 𝐁𝐚𝐁𝐮.... 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "ravi") || (event.body.toLowerCase() == "Ravi") || (event.body.toLowerCase() == "king") || (event.body.toLowerCase() == "KING")) {
     return api.sendMessage( "🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙🥀ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎Mr RAVI KUMAR­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎🌴 बीजी होगा किसी काम में 🙂 मैं हूं ना बताओ किया काम है। 🙂🤟🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙",threadID);
  };

   if ((event.body.toLowerCase() == "bot malik ko  h") || (event.body.toLowerCase() == "Kiska bot hai")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝙼𝚈 𝙱𝙾𝚂𝚂 𝙸𝚂 𝙼𝚛Ravi kumar 𝙲𝙾𝙽𝙴𝚃𝙲𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ☞︎︎︎[+1 NHI BATAUNGA] ☞︎︎ ☞︎ ㋛︎ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 https://www.facebook.com/profile.php?id=61555796837996&mibextid=ZbWKwL✍︎ 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 ♥︎🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   if ((event.body.toLowerCase() == "Tumhe kis ne banaya") || (event.body.toLowerCase() == "tumko kisne banaya hai")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙☞︎︎ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎Raviค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎kumarค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎☜︎︎︎ 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙴𝚁. 𝙷𝙴 𝙻𝙾𝚅𝙴𝚂 𝙼𝙴 & 𝙴𝙳𝙸𝚃 𝙼𝙴 𝙳𝙰𝙸𝙻𝚈.✯✯✯ ये 𝙱𝙾𝚃 सिर्फ 𝙾𝚆𝙽𝙴𝚁 के लिए है। मुझे आप लोगो को हंसाने के लिए बनाया गया है। तो मुंह लटकाए न रखा करो हर वक्त हस्ते रहो 𝗔𝗽𝗸𝗮 Ravi kumar ।☞︎︎︎ 𝚃𝙷𝙰𝙽𝙺𝚈𝙾𝚄 ☜︎︎︎ 🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙𝙷𝙴 𝙸𝚂 𝙼𝚛RAVI KUMAR. 𝙷𝙴 𝙶𝙸𝚅𝙴𝚂 𝙷𝙸𝚂 𝙽𝙰𝙼𝙴 𝙼𝚛KING ☞︎︎︎ RAVI ☜︎︎︎🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") ||   (event.body.toLowerCase() == "🙈🙈") ||  (event.body.toLowerCase() == "🙈🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈🙈")) {
     return api.sendMessage("🍒🍒🍒...𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐒𝐇𝐀𝐑𝐌𝐀 𝐆𝐘𝐈...😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "sadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("🍒🍒..𝐇𝐀𝐍 𝐉𝐈 𝐊𝐀𝐑𝐔𝐍𝐆𝐈 𝐋𝐄𝐊𝐈𝐍 𝐁𝐀𝐂𝐇𝐇𝐀 𝐀𝐀𝐏𝐊𝐄 𝐏𝐄𝐓 𝐌𝐄 𝐇𝐎𝐆𝐀 𝐌𝐀𝐍𝐉𝐔𝐑 𝐇𝐄𝐈....?🤪🤪🤪", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("🍒🍒🍒....𝐍𝐇𝐈 𝐊𝐀𝐑𝐔𝐍𝐆𝐈 𝐌𝐄𝐑𝐈 𝐉𝐔𝐁𝐀𝐍 𝐇𝐀𝐈 𝐌𝐄 𝐁𝐎𝐋𝐔𝐍𝐆𝐈 𝐓𝐔𝐌 𝐊𝐎𝐍 𝐇𝐎𝐓𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐑𝐎𝐊𝐍𝐄 𝐕𝐀𝐋𝐄 𝐓𝐇𝐀𝐑𝐊𝐈 𝐈𝐍𝐒𝐀𝐀𝐍...😒😒🤟", threadID);
   };

   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "bot gandu")) {
     return api.sendMessage("Bot ko gandu boly ga saly teri height jitna mera lund ha jab teri gand ma jaye ga to munh wali side se bahir aye ga gandu.😾😒", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera takli") || (event.body.toLowerCase() == "boss hu tera raja bahu") || (event.body.toLowerCase() == "boss ki bezti kr raha takle")) {
     return api.sendMessage("𝐒𝐎𝐑𝐑𝐘 𝐁𝐎𝐒𝐒 𝐌𝐀𝐅 𝐊𝐀𝐑 𝐃𝐈 𝐀𝐁 𝐍𝐇𝐈 𝐁𝐎𝐋𝐔𝐍𝐆𝐈...🥺🥺🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you ravi")) {
     return api.sendMessage("️🍒🍒🍒🍒....𝐌𝐄 𝐇𝐔 𝐇𝐈 𝐄𝐓𝐍𝐈 𝐀𝐂𝐇𝐇𝐈 𝐒𝐀𝐁 𝐋𝐎𝐆 𝐌𝐄𝐑𝐈 𝐓𝐀𝐑𝐈𝐅 𝐊𝐀𝐑𝐓𝐑 𝐇𝐀𝐈..|😌😌👈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️🍒🍒..𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 𝐑𝐎𝐓𝐄 𝐍𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐂𝐇𝐀𝐇𝐈𝐘𝐄 🙂 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 🍫 𝐃𝐄𝐓𝐈 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎  ☞[𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞]☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️🍒🍒🍒...𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐀𝐁𝐔 𝐓𝐀𝐁𝐈𝐘𝐀𝐓 𝐊𝐇𝐀𝐑𝐀𝐁 𝐇𝐄 𝐊𝐈𝐘𝐀 😢 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐌𝐄𝐃𝐈𝐒𝐎𝐍 💊💉 𝐋𝐄 𝐀𝐀𝐓𝐈 𝐇𝐔.....😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️🍒🍒🍒...𝐀𝐑𝐄 𝐘𝐀𝐑 𝐑𝐎𝐓𝐄 𝐍𝐇𝐈 𝐏𝐀𝐆𝐀𝐋 𝐊𝐈𝐘𝐀 𝐇𝐔𝐀 𝐇𝐄 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐁𝐀𝐁𝐔....🥺🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "shahzan kon h") || (event.body.toLowerCase() == "CP TATTA kon h")) {
     return api.sendMessage("️Chudi Hui Randi ha Sbse Chudwati ha🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️🍒🍒🍒...𝐇𝐀𝐘 𝐓𝐄𝐋𝐀 𝐌𝐀𝐒𝐎𝐎𝐌 𝐒𝐀𝐊𝐀𝐋....😝🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️🍒🍒🍒...𝐎𝐋𝐄 𝐌𝐄𝐋𝐀 𝐁𝐀𝐁𝐔 𝐔𝐋𝐓𝐀 𝐇𝐎 𝐆𝐘𝐀...🧐✋", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️🍒🍒🍒...𝐁𝐀𝐁𝐔 𝐀𝐀𝐏𝐊𝐈 𝐍𝐀𝐀𝐊 𝐄𝐓𝐍𝐈 𝐋𝐀𝐌𝐁𝐈 𝐇𝐄 𝐔𝐒𝐊𝐈 𝐉𝐀𝐑𝐔𝐑𝐀𝐓 𝐇𝐈 𝐍𝐇𝐈 𝐏𝐀𝐃𝐓𝐈 𝐇𝐎𝐆𝐈...🤐🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("️️🍒🍒🍒🍒...𝐄𝐓𝐍𝐀 𝐌𝐀𝐓 𝐒𝐎𝐂𝐇𝐎 𝐓𝐇𝐀𝐑𝐊𝐈 𝐈𝐍𝐒𝐀𝐀𝐍 𝐓𝐄𝐑𝐈 𝐕𝐀𝐋𝐀 𝐁𝐀𝐁𝐔 𝐊𝐎 𝐁𝐇𝐀𝐆𝐀 𝐊𝐄 𝐋𝐄 𝐉𝐀𝐔𝐍𝐆𝐈....🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️ 🍒🍒🍒🍒..𝐊𝐈𝐘𝐀 𝐒𝐎𝐂𝐇 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐄𝐓𝐍𝐀 𝐁𝐀𝐁𝐔...🤨👈", threadID);
   };

   if ((event.body.toLowerCase() == "😂") ||(event.body.toLowerCase() == "😂😂") ||(event.body.toLowerCase() == "😂😂😂") ||(event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😁") ||(event.body.toLowerCase() == "😁😁") ||(event.body.toLowerCase() == "😁😁😁") ||(event.body.toLowerCase() == "😁😁😁😁") ||(event.body.toLowerCase() == "😀") ||(event.body.toLowerCase() == "😀😀") ||(event.body.toLowerCase() == "😀😀😀") ||(event.body.toLowerCase() == "😀😀😀😀") ||(event.body.toLowerCase() == "😅") ||(event.body.toLowerCase() == "😅😅") ||(event.body.toLowerCase() == "😅😅😅") ||(event.body.toLowerCase() == "😅😅😅😅") ||(event.body.toLowerCase() == "😄") ||(event.body.toLowerCase() == "😄😄") ||(event.body.toLowerCase() == "😃") ||(event.body.toLowerCase() == "😃😃") || (event.body.toLowerCase() == "😆") ||(event.body.toLowerCase() == "😆😆") ||(event.body.toLowerCase() == "😆😆😆") ||(event.body.toLowerCase() == "😆😆😆😆") || (event.body.toLowerCase() == "🤣") ||(event.body.toLowerCase() == "🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣") ||(event.body.toLowerCase() == "🤣🤣🤣🤣") || (event.body.toLowerCase() == "😸") ||(event.body.toLowerCase() == "😸😸") ||(event.body.toLowerCase() == "😸😸😸") ||(event.body.toLowerCase() == "😸😸😸😸") ||(event.body.toLowerCase() == "😹") ||(event.body.toLowerCase() == "😹😹") ||(event.body.toLowerCase() == "😹😹😹") || (event.body.toLowerCase() == "😹😹😹😹")) {
     return api.sendMessage("🌿🌸🍒....𝐌𝐮𝐇 𝐁𝐚𝐍𝐝 𝐊𝐚𝐑𝐨 𝐕𝐚𝐑𝐧𝐀 𝐌𝐚𝐊𝐤𝐇𝐢 𝐆𝐡𝐔𝐬 𝐉𝐚𝐘𝐠𝐈 ___ 🤓🤭😝", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("️🍒🍒..𝐂𝐇𝐀𝐋 𝐁𝐇𝐀𝐆 𝐍𝐀𝐒𝐇𝐄𝐃𝐈...🤨🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️🍒🍒...𝐎𝐘𝐄 𝐓𝐄𝐑𝐄 𝐋𝐈𝐏𝐒 👄 𝐊𝐀𝐇𝐀 𝐇𝐀𝐈...🤔👈", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️🍒🍒🍒...𝐀𝐀𝐍𝐊𝐇 𝐊𝐘𝐎 𝐌𝐀𝐑 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐓𝐇𝐀𝐑𝐊𝐈 𝐈𝐍𝐒𝐀𝐀𝐍...🥺🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️🍒🍒🍒...𝐊𝐈𝐘𝐀 𝐇𝐔𝐀 𝐁𝐀𝐁𝐔...🤔🤟", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄🙄")) {
     return api.sendMessage("️🍒🍒🍒...𝐔𝐏𝐀𝐑 𝐊𝐈𝐘𝐀 𝐇𝐄 𝐁𝐀𝐁𝐔 𝐉𝐎 𝐄𝐓𝐍𝐀 𝐃𝐄𝐊𝐇 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍...🙂🤟", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("️️🍒🍒🍒...𝐓𝐈𝐊𝐇𝐈 𝐍𝐀𝐉𝐑𝐈𝐘𝐀 𝐌𝐎𝐑𝐈 𝐇𝐀𝐘 𝐇𝐀𝐘 𝐇𝐀𝐘....🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("️🍒🍒🍒...𝐎𝐘𝐄 𝐇𝐎𝐘𝐄 𝐀𝐀𝐏𝐊𝐀 𝐂𝐇𝐀𝐒𝐌𝐀 𝐁𝐈𝐋𝐊𝐔𝐋 𝐁𝐄𝐊𝐀𝐑 𝐇𝐀𝐈...😂👈", threadID);
   };

  if ((event.body.toLowerCase() == "Besram") || (event.body.toLowerCase() == "Harami") || (event.body.toLowerCase() == "Bebdi") || (event.body.toLowerCase() == "Kutti") || (event.body.toLowerCase() == "Khebdi") || (event.body.toLowerCase() == "Nikal")) {
     return api.sendMessage("🍒🍒🍒..𝐁𝐀𝐁𝐔 𝐄𝐒𝐄 𝐌𝐀𝐓 𝐁𝐎𝐋𝐎 𝐌𝐔𝐉𝐇𝐄 𝐑𝐎𝐍𝐀 𝐀𝐀 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈....😭😭😭😭😭😭", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("🍒🍒...𝐇𝐀𝐘𝐄 𝐄𝐓𝐍𝐀 𝐏𝐘𝐀𝐑 𝐁𝐀𝐁𝐔...🙈🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("🍒🍒..𝐌𝐄 𝐀𝐂𝐇𝐇𝐈 𝐇𝐔 𝐀𝐀𝐏 𝐊𝐄𝐒𝐄 𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍...😇☺👈", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("ओय चिड़ा रहे हो मुझे 🙁👈", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: `╔═════▓࿇࿇▓═════╗\n${name}\n╚═════▓࿇࿇▓═════╝ \n\n ☞︎ 😻🙈😻 ☜︎\n\n◈━━━━━😻🐧😻━━━━━◈\n ${rand} \n◈━━━━━😻🐧😻━━━━━◈\n\n ☞︎*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.KAMÉENA🍒😻🍒..☜︎`
    }
      return api.sendMessage(msg, threadID, messageID);
      };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
