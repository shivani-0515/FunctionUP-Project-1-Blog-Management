const authorModel = require("../model/authorModel")

const blogModel = require("../model/blogModel")

const createBlog = async function (req,res){
    let data = req.body 
    let savedData = await blogModel.create(data)
    res.send({msg : savedData})
}
module.exports.createBlog=createBlog