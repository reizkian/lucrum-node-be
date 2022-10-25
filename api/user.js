const express = require("express");
const router = express.Router();

const {createUser} = require("../controller/user");

router.post("/user", createUser);

module.exports = router;
