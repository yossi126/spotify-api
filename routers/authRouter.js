const express = require("express");
const router = express.Router();

const { login, callBack } = require("../controllers/authController");

router.route("/login").get(login);
router.route("/callback").get(callBack);

module.exports = router;
