const express = require('express');
const cors = require('cors'); 
const compression = require('compression');
const bodyParser = require('body-parser');
const parser = require('ua-parser-js');
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const passport = require('passport');
const {LogVisitor} = require('./Utilities/LogVisitor.js');
const passportUtilities = require('./Utilities/passportUtils');
const session = require('express-session');
const path = require('path');
var fs = require('fs');
const es6Renderer = require('express-es6-template-engine');
const app = express();

mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then(() =>console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB Not connected"));
    
    app.engine('html', es6Renderer);
    app.set('views', path.resolve(__dirname, '../', 'dist',));
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        cookie:{secure:false, maxAge: 24*60*60*1000}
    }));
    app.use((req, res, next) => 
    {
        LogVisitor(req,res);
        next();
    });
    
app.use(passport.session());
const googleStrategy = require('./Strategies/googleStrategy');
const twitterStrategy= require('./Strategies/twitterStrategy');
const githubStrategy= require('./Strategies/githubStrategy');
passport.use(googleStrategy);
passport.use(twitterStrategy);
passport.use(githubStrategy);

app.set('trust proxy', true)
app.use(cors({origin: '*',})); 
app.use(express.static('images'));
app.use(express.static(path.resolve(__dirname, '../', 'dist',)));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
