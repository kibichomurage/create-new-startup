const GithubStrategy = require('passport-github2').Strategy;
const User = require("../MongoModels/userSchema");
const Auth = require("../MongoModels/authenticationSchema");
const moment = require('moment-timezone');


const strategy = new GithubStrategy({
clientID:process.env.GITHUB_CLIENT_ID,
clientSecret:process.env.GITHUB_CLIENT_SECRET,
callbackURL:process.env.GITHUB_CALLBACK_URL
}, async function(accessToken, refreshToken, profile, done)
{
    //console.log("Github response received" + JSON.stringify(profile));
    //Check if user exists, add to DB if not, log if does
    var currentUser = await User.findOne({'authentication.authStrategy': 'GitHub', 'authentication.id' : profile.id});
    const currentTime = moment().tz("America/New_York").format();
    if(!currentUser)
    {
        console.log(profile)
        const authentication = Auth({authStrategy: "GitHub", id: profile.id, name:profile.displayName, email:profile._json.email, company:profile._json.company, blog:profile._json.blog, location:profile._json.location,twitter_username:profile._json.twitter_username, loginHistory:[currentTime]});
        const user = new User({authentication: authentication});
        try
        {
            await user.save();
        }
        catch(error)
        {
            console.log(error);
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