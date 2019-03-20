var passport= require('passport');
var Localstrategy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
