const router = require("express").Router();
const passport = require('passport');

const protectedRoutes = require("./protected/");
const authRoutes = require("./auth");

// Book routes
router.use("/auth", authRoutes);
router.use("/protected", passport.authenticate('jwt', { session: false }), protectedRoutes);
module.exports = router;
