import  Jwt  from "jsonwebtoken"


export const auth=(req,res,next)=>{
    Jwt.verify(req.headers.token, 'rehab', async(err, decode) => {
        if (err) return res.json({ error: err })

        next();
    })
}