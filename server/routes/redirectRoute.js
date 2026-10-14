const router = require ("express").Router()
const {redirectLink} = require("../controllers/LinkController")

router.get("/:shortCode",redirectLink)

module.exports = router