const { sign } = require("../../utils/jwt")
module.exports = {
    POST: (req, res) => {
        try {
            const admin = {
                email: 'tohirjondoniyorov@gmail.com',
                password: "2003tohir"
            }

            const { email, password } = req.body
            
            if(email === admin.email && password === admin.password){
                let token =  sign({user_email: email, user_password: password, role: 'admin'})

                res.json({
                    role: 'admin',
                    access_token: token,
                    isLogin: true,
                    status: 'Success!!!'
                })

                return
            }else {
                let token = sign({user_email: email, user_password: password, role: 'customer'})

                res.json({
                    role: 'customer',
                    access_token: token,
                    isLogin: true,
                    status: 'Success!!!'
                })

                return
            }

        } catch(err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    }
}