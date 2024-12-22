const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "lqEFQbgL#8LD-Ea5HfzdwzVfv7s_Ya0TiffN-r7cJ_mk98EIVFgY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/zxPtLwb/FB-IMG-17328242694165669.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello 👋 i am ☠️PAIN☠️, I am alive!!!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
