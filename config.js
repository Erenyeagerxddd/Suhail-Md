const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919061949401";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919633119220";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_36_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRuYjk3eXF2UndRdkxHQ3VTcVRMa0FGZHJianBnT1hSUllWMHcvc1BXQ2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NjMzMTE5MjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMjU1Q0I5MzQwMjdBMjg0MjU2MzMwM0M1MjMwNTIwNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5NjU4MDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVV9oV28wbTlTejJ5SEhLY3d4WHhHd1wiLFxuICBcInBob25lSWRcIjogXCI4NzkyZmJmNC1iOWRhLTQwMzEtYWIxYS02ZTEwN2Q4ZTVjZGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxMDQsXG4gICAgICA4NCxcbiAgICAgIDE4NixcbiAgICAgIDM4LFxuICAgICAgMTcwLFxuICAgICAgMTcwLFxuICAgICAgNTEsXG4gICAgICA3MSxcbiAgICAgIDI1MixcbiAgICAgIDc2LFxuICAgICAgMTQxLFxuICAgICAgMTI2LFxuICAgICAgMSxcbiAgICAgIDI5LFxuICAgICAgMTYwLFxuICAgICAgNDEsXG4gICAgICAxMDAsXG4gICAgICAyNDUsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgNyxcbiAgICAgIDkyLFxuICAgICAgMjUxLFxuICAgICAgMzIsXG4gICAgICAxMjAsXG4gICAgICAyMixcbiAgICAgIDgsXG4gICAgICAyNTMsXG4gICAgICAxMjgsXG4gICAgICAyMCxcbiAgICAgIDI0MixcbiAgICAgIDExNixcbiAgICAgIDI0MyxcbiAgICAgIDEwLFxuICAgICAgMTA4LFxuICAgICAgMTg3LFxuICAgICAgMTI5LFxuICAgICAgODcsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0FKODVDV05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTYzMzExOTIyMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2lnbWEg4LSu4LSv4LS/4LW9XCIsXG4gICAgXCJsaWRcIjogXCIxMjE3NTQxODU5MDgzNTQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZS90cFlIRUtTK3liVUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZUZzl6dE1IUjhFRzJnK3FIbzV1b1lhTERqbkpQQXVldGgxSzJsSjNLdzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2JTbkxZV3dEN0xPS3dYYjZBdnNQMTg3RzdrZDZTbXRRTGRLWHhSdUdVVGNmemRhVDFISjBHR1BYQUI0QmJBYm1jYkxyN0JKZEEwVStzS0JBeW5VQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMm1KaUhsT2FRbEVIUjU2bUJ0RGVHa3pCNlQwKzNPVHRoclJWVVpmWVRWbmpWWEgxTGU5VSt1WGltSkU4OGZDN2FPczdvY1V5ZHo4RXgwQ1BTSnpYalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NjMzMTE5MjIwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NjU3OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZQOS5qc29uIjogIntcImtleURhdGFcIjpcIncxMEVNV2xNc05ZZE9RYWQ4SmtWRTVlclBPSjFHZmFHeExVS2Fxekk3MVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNjA3ODQ1NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Maki-md",
  ownername:process.env.OWNER_NAME|| "Sigma മയിൽ 🗿🍷",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
