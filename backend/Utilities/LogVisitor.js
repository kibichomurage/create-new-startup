const Visitor = require("../MongoModels/visitorSchema");
const bcrypt = require("bcryptjs");
const BCRYPT_SALT = 10;
const parser = require('ua-parser-js');
const moment = require('moment-timezone');
const crypto = require('crypto')

//Middleware to log Visitor activity
async function LogVisitor (req,res)
{
    try
    {
        const userAgent = parser(req.headers['user-agent']);
        const ipAddress = req.clientIp;
        const referrer =  req.headers.referrer || req.headers.referer || "absent";
        const currentTime = moment().tz("America/New_York").format();

        const visitorID= crypto.createHash('md5').update(userAgent + ipAddress).digest("hex")
        const visitorExists = await Visitor.findOne({trackingID: String(visitorID)});
        if(visitorExists)
        {
            await visitorExists.updateOne({$push:{requestTimes :currentTime, requestHistory:req.url || "undefined", referrerHistory: referrer}});
        }
        else
        {
            const visitor = new Visitor({
                trackingID : String(visitorID) ||"undefined",
                ipAddress : String(ipAddress) ||"undefined",
                browser: userAgent.browser.name ||"undefined",
                cpu: userAgent.cpu.architecture ||"undefined",
                os: userAgent.os.name ||"undefined",
                ua: userAgent.ua ||"undefined",
                device: userAgent.device.vendor ||"undefined",
                model: userAgent.device.model ||"undefined",
                type: userAgent.device.type ||"undefined",
                requestHistory:[req.url || "undefined"],
                requestTimes:[currentTime],
                referrerHistory:[referrer]
            });
            const savedVisitor = await visitor.save();
        }       
       
    }
    catch(error)
    {
        console.log(error)
    }
};

module.exports = {LogVisitor};