const Link = require("../model/link")

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

        res.status(201).json(newLink)
    } catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}

module.exports = {saveLink}