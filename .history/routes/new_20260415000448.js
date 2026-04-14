const express = require("express");
const router= express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing, validateReview} = require("../middleware.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/login/new")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
     passport.authenticate("local",
        { failureRedirect: `/login`, failureFlash: true }),
         userController.loginForm
        
); 