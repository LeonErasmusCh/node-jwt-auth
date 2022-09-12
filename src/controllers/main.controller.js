const jwt = require('jsonwebtoken')



const index = (req, res) => {
    return res.json({"message": "API REST node.js"})
}

const login = (req, res) => {
 const { email, password } = req.body

 if(!email || !password){
    return res.json({ message:  'email or password is required'})
 }

 if(email === "test@gmail.com" && password === "admin"){
     const token = jwt.sign({ email : email }, process.env.SECRET_KEY, {
        expiresIn : 60000
     })
     console.log("token", token)
     res.json({token : token})
 } else {
    return res.json({ message : "user not valid" })
 }

}


const private = (req, res) => {
    console.log(req.decoded.email)
    return res.json({ message : "Private route" })
}




module.exports = {
    index,
    login,
    private
}