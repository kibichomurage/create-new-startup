const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../MongoModels/userSchema");
const Auth = require("../MongoModels/authenticationSchema");
const moment = require('moment-timezone');

const strategy = new GoogleStrategy({
clientID:process.env.GOOGLE_ID,
clientSecret:process.env.GOOGLE_SECRET,
callbackURL:process.env.GOOGLE_CALLBACK_URL
}, async function(accessToken, refreshToken, profile, done)
{
    var currentUser = await User.findOne({'authentication.authStrategy': 'Google', 'authentication.id' : profile.id});
    const currentTime = moment().tz("America/New_York").format();
    if(!currentUser)
    {
        const authentication = Auth({authStrategy: "Google", id: profile.id, email: profile._json.email ,name: profile._json.name , loginHistory:[currentTime]});
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
}
);

module.exports = strategy;