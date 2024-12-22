const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "lqEFQbgL#8LD-Ea5HfzdwzVfv7s_Ya0TiffN-r7cJ_mk98EIVFgY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/YFtmhOw.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 👋 i am ☠️KNOWPAIN☠️, I am alive!!!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
