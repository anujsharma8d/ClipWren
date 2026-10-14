const Link = require("../model/link")
require("dotenv").config();
const base_url = process.env.BASE_URL

const saveLink = async (req,res)=>{
    try{
        const {link} = req.body

        const options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        let randomCode = ""
        for(let i=0;i<6;i++){
            randomCode = randomCode + options[Math.floor(Math.random()*options.length)]
        }

        const newLink = await Link.create({
            link:link,
            shortCode:randomCode
        })

        res.status(201).json({
            shortUrl:`${base_url}/${newLink.shortCode}`
        })
    } catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}

const redirectLink = async(req,res)=>{
    const {shortCode} = req.params

    const orglink = await Link.findOne({shortCode})

    if(!orglink){
        res.status(404).json({
            message:"Short URL not found"
        })
    }

    res.redirect(orglink.link)
}

module.exports = {saveLink,redirectLink}