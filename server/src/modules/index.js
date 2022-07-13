const express = require('express')
const router = express.Router()

const Login = require("./Login/login")
const Building = require("./Building/building")
router
    .post('/login', Login.POST)
    .get('/company', Building.GET)
    .get('/company/:companyId', Building.GET_COMPLEX)
    .get('/complex/:complexId', Building.GET_ROOMS)
    .get('/rooms/:roomsId', Building.GET_DURATION)
    .post('/payment', Building.GET_INFO)
    .post('/company', Building.POST_COMPANY)
    .delete('/company/:companyId', Building.DELETE_COMPANY)
    .delete('/complex/:complexId', Building.DELETE_COMPLEX)
    .get('/complexAdmin', Building.GET_ADMIN_COMPLEX)
    .post('/complex', Building.ADD_COMPLEX)
    .get('/roomsComplex/:complexId', Building.GET_COMPLEX_ROOMS)
    .post('/addrooms', Building.ADD_ROOMS)
    .delete('/deleteroom/:roomId', Building.DELETE_ROOMS)


module.exports = {
    router
}