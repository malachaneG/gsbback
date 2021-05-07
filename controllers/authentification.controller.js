/*const userModel = require('../models/user.model')
const createAccessToken = require('../config/utils/token')

const searchByLogin = (request, response) => {
    try {
        const { login, password  } = request.body
        userModel.searchByLogin(login, async (err, result) => {
            console.log(result)
            if (err) throw err
            else {
                if (password == result[0].mdp) {
                    const token = await createAccessToken(result[0])
                    response.json({ token })

                }
                else {
                    response.status(403).send({ error: 'Forbidden' })

                }
            }

        })
    } catch (e) {
        console.error(e)

    }
}
module.exports = {
    searchByLogin
}*/