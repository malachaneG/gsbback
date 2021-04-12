var jsonwebtoken = require('jsonwebtoken')

const createAccessToken = (user) =>{
    return new Promise((resolve, reject) =>{
        if(user.id === undefined) reject ({error: 'invalid credentials'})
        else {
            const signedUser = {
                email: user.login,
                id: user.id
            }
            jsonwebtoken.sign(signedUser, "ppe", {expiresIn:"1d"}, (error,token)=>{
                if(error) reject(error)
                else resolve(token)
            })
        }
    })
}

module.exports = createAccessToken
