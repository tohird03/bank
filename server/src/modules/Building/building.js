const model = require('./model')

module.exports = {
    GET: async(req, res) => {
        try {
            res.json(
                await model.getcompany()
            )
        } catch(err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    GET_COMPLEX: async(req, res) => {
        try {
            const { companyId } = req.params

            res.json(
                await model.getcomplex(companyId)
            )
        } catch(err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    GET_ROOMS: async(req, res) => {
        try {
            const { complexId } = req.params

            res.json(
                await model.getrooms(complexId)
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    GET_DURATION: async(req, res) => {
        try {

            const { roomsId } = req.params

            res.json({
                duration: await model.getduration(),
                roomsInfo: await model.getroomsinfo(roomsId)
            })
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    GET_INFO: async(req, res) => {
        try {
            const { duration, kv_home, kv_price } = req.body

            res.json({
                about_bank: await model.getbank(duration, (kv_home * kv_price)),
                house_price: kv_home * kv_price
            })
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    POST_COMPANY: async(req, res) => {
        try {
            const { company_name, company_img } = req.body

            await model.addcompany(company_name, company_img)
            res.json({
                ok: 'ok'
            })
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    DELETE_COMPANY: async(req, res) => {
        try {
            const { companyId } = req.params
            res.json(
                await model.deletecompany(companyId)
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    GET_ADMIN_COMPLEX: async(_, res) => {
        try {
            res.json(
                await model.getadmincomplex()
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    ADD_COMPLEX: async (req, res) => {
        try {
            const { complex_name, company_id } = req.body

            await model.addcomplex(complex_name, company_id)
            res.json({
                ok: 'ok'
            })
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    DELETE_COMPLEX: async(req, res) => {
        try {
            const { complexId } = req.params
            res.json(
                await model.deletecomplex(complexId)
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    GET_COMPLEX_ROOMS: async(req, res) => {
        try {
            const { complexId } = req.params
            res.json(
                await model.getcomplexrooms(complexId)
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    ADD_ROOMS: async(req, res) => {
        try {
            const {
                rooms_number,
                price_square,
                rooms_square,
                home_address,
                complex_id
            } = req.body

            res.json(
                await model.addrooms(
                    rooms_number,
                    price_square,
                    rooms_square,
                    home_address,
                    complex_id
                )
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    },
    DELETE_ROOMS: async(req, res) => {
        try {
            const { roomId } = req.params

            res.json(
                await model.deleteroom(roomId)
            )
        } catch (err) {
            console.log(err.message)
            res.sendStatus(500)
        }
    }
}