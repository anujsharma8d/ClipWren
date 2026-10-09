const router = require ("express").Router()
const {saveLink} = require("../controllers/LinkController")

router.post("/shorten",saveLink)

module.exports = router
