const router = require("express").Router()

const bodyparser = require("body-parser")

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../modal/usermodal")

// router.use(bodyparser.json())



// is logged in part ..................................................

router.post("/logedin", async (req, res) => {

    try {
        const token = req.body.Authorization

        const verifyuser = await jwt.verify(token, "shhh")
        
        if (verifyuser) {
            console.log(verifyuser)
            const ID = verifyuser.id

            const user = await User.findOne({ _id: ID })

            console.log(user)

            res.status(200).json(user)



        }

    }
    catch (e) {
        res.status(403).json({
            message: "NOT LOGGEDIN"
        })

    }


})


//  register  part   .............................................

router.post("/signup", async (req, res) => {

    try {

        if (req.body) {


            const hasspass = await bcrypt.hash(req.body.password, 10)

            const newuser = await User.create({ email: req.body.email, password: hasspass })

            res.json({ user: newuser })

        }
        else {
            res.json({
                message: "enter details"
            })
        }



    }
    catch (e) {

        res.json({ message: e.message })

    }


})


// sign in part..........................................

router.post("/signin", async (req, res) => {
    try {

      if(!req.body){

        return res.json({
            message:"enter details"
        })
      }




        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.json({ message: "user not found" })
        }


        if (user) {

          
            const compare =await bcrypt.compare(req.body.password,user.password)

            if (!compare) {
                return res.status(400).json({
                    message: "invalid password"
                })
            } else {

                const token = jwt.sign({ id: user._id }, "shhh")

                res.status(200).json({
                    token: token,
                    user: user
                })

            }


        }


    }
    catch (e) {


        res.json({
            message: e.message
        })



    }
})

module.exports = router
