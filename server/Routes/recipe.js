const router = require("express").Router()


const Recipe = require("../modal/post");




// post part............................................................................

router.post("/post", async (req, res) => {

    try {

        if (req.body) {

            const post = await Recipe.create(req.body)

            res.json({
                post: post
            })

        } else {
            res.json({
                message: "enter details"
            })
        }


    }
    catch (e) {



    }




})


// get all part...........................................................


router.get("/home",async (req,res)=>{

    try{

        const post=await Recipe.find()
        
        res.status(200).json({
           post:post
        })
         

    }
    catch(e){
        res.json({
            message:e.message
        })

    }


})


// get post by search part.............../.........................


router.get("/home/:title",async (req,res)=>{

    let Title=req.params.title

    try{

        const post=await Recipe.find({title:{$regex:Title}})
        
        res.status(200).json({
            post
        })
         

    }
    catch(e){
        res.json({
            message:e.message
        })

    }


})


// get post by id............................/........................................



router.get("/home/view/:Id",async(req,res)=>{

    let Id=req.params.Id

    try{

        const post=await Recipe.find({_id:Id})


        
        res.status(200).json({
            post
        })
         

    }
    catch(e){
        res.json({
            message:e.message
        })

    }


})










module.exports = router