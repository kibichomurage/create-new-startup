const TwitterStrategy = require('passport-twitter').Strategy;
const User = require("../MongoModels/userSchema");
const Auth = require("../MongoModels/authenticationSchema");
const moment = require('moment-timezone');

const strategy = new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL:process.env.TWITTER_CALLBACK_URL
}, async function(accessToken, refreshToken, profile, done)
{
    var currentUser = await User.findOne({'authentication.authStrategy': 'Twitter', 'authentication.id' : profile.id});
    const currentTime = moment().tz("America/New_York").format();
    if(!currentUser)
    {
        const authentication = Auth({authStrategy: "Twitter", id: profile.id, name:profile.displayName, location:profile._json.location, loginHistory:[currentTime]});
        const user = new User({authentication: authentication});
        try
        {
            await user.save();
            //done(null, user);
        }
        catch(error)
        {
            console.log(error);
            //done(error, user);
        }   
        currentUser = user; 
    }
    else
    {
        try
        {
            await currentUser.updateOne({$push:{'authentication.loginHistory':currentTime}});
        }
        catch(error)
        {
            console.log(error)
        }
    }
    
    done(null, profile);
}); 
module.exports = strategy;
