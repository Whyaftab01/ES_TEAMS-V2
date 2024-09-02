//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "examsolutionteam@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/87c16c8681f3859ec4e80.jpg";
global.devs = "https://t.me/examsolutionteam";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "923103278551";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a81247659e996130a88ea.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";
global.scan = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUI2dmEvTGh1WlNTYm55R09ZcjVsZ2N6dVYxTStxZ0V6RFhLVXFoQlZrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3pSNElmQ2dtZDdsSjNMRHNtZ01zNnZIUnlGM2plajhFeG9xYm1iSFpBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT3ZZaVY5OFN1aG9tK2ZKRWhFQngxVDBjZDNxNEI0Nm5BWU01RXJNbDJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4WU1GYTAwRVM3T3UrMGdBUTJOTDdvZnhMajVQMkdqSXptNXRPT2RmRHg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDdWI1akhFYkJNS1JmVFZJTHNKUVlpdmhmWjloMU9zeThHQys1QWtMWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQQlNVa2lUZWE0NkoweDdxTERiZmpRV3gzbk5BSFlQdjM5aXpnWkl6aTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0g0bldCMkdwTk96c3JKRlFhVjUzc2xBZmpYVTNoeklrcFU1Nk0xd1BHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjlObk1TOHBGTCs0ZnZrTmdsZlBPNTZkMEpRUE44a29YeXZ2dlhHSVhScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9wdk8rOTFSeFJ5TnQrMFlzeWdtM3hDaVFVeHNYQkRIOU5wNHdkOFZvM2FDZDkxaUVyaDExMGxMTTRKRktDdkNtMkQ3WlNoc043bFpocWtMaE5IV2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IklZMWx6dXBhT0k2dDExNWZ4ZFhxbXVIdlFwemxlQ05kcUdqRUplN1RwcEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDI5MjQyODgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVGODM3NjkwODVEMkM3M0ZEODIxMDgzRjJFNTAwQzE1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUyOTc0MDB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQyOTI0Mjg4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MzdDQ0Y3MTM1Qzg1MkE1MjAzMTc3RjZFRDZGNzY5QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1Mjk3NDAwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MjkyNDI4ODBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkIzM0FFNzYzQThBRDY3M0M4OUQxRDk1M0E0OUI3M0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTI5NzQwMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDI5MjQyODgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwQzQ3MzA0QjFCRTNFNjE5MzEyRDRENTc4M0ZEMkVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUyOTc0MDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdETWk0QVVjVGRlbU1SS1k3djdsV1EiLCJwaG9uZUlkIjoiNWI1MGQyZDYtNDcxMS00ODNmLWIxYjctNGQ4ZDRlZTVkZjZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9uUmtnMWJZaVhTa3VwZVl5REZuSTR0Z0ZrRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPbjhMYU0zNEUyZTNWS2FaUi8wbjhLNENnTms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlJWNDc4U1oiLCJtZSI6eyJpZCI6IjkyMzQyOTI0Mjg4MDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNSQVpZIEdVWfCfmIHwn5iB8J+YgSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlRKNHBFQ0VPbmwxN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSTdLd3ZLdWtGZHBNdGxoUXBMdSsyU0FWVGJJbWh2eksrWEVJQjZiUnh6OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRzlXK3Q3VCtPZHJhQStrNnhtQ3hNSklVa252WW0vVzhIZW95Y1RvYndqTFNTNzJBYUZYaDkxUit1ZENvVFo3VGpmWlV6ZTRJa0c4OXk2cjNQdXFhQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1XNzB6UllWdVJhK1cydHFhaS9MdG96VDJYSkdwNmNuZjM3S0J6VndkQy9wOEMvcGM3bmh4UmF4VjFyRU1KVGZjT0hRcFI5WWI4WkE1eTZlTUNGOGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDI5MjQyODgwOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU095c0x5cnBCWGFUTFpZVUtTN3Z0a2dGVTJ5Sm9iOHl2bHhDQWVtMGNjLyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTI5NzM5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHWEYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
