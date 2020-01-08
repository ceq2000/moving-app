const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const db = require("../models");

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.AUTH_TOKEN_SECRET;
opts.issuer = 'readinglist-api';
opts.audience = 'readinglist-react-gui';

module.exports = function () {
    passport.use(new JwtStrategy(opts, verifyCallback));
}

async function verifyCallback(jwt_payload, done) {
    let user, err;
    try {
        user = await db.User.findById(jwt_payload.sub);
    } catch (error) {
        err = error
    }

    if (err) {
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
}