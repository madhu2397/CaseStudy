const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser')

const authMiddle = (req,res,next) => {
        const token = req.cookies.jwt;
        console.log(token);

    //verify token 
    if(token){
        jwt.verify(token,'Madhuri', (err,decodedData) => {
            if(err){
                res.status(401).json({ message: "Unauthorized user"}); 
            }
            else{
                req.userId = decodedData.id;             
                next()
            }
        })
    }
    else{
        res.status(205).json({ message: "Please do login" })
    }
}
module.exports = authMiddle;