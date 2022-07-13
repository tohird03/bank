const { fetchData } = require("../../utils/postgres");

const GET_COMPANY = `
    SELECT * FROM company
`
const GET_COMPLEX = `
    SELECT
        c.company_name,
        c.company_img,
        c.company_id,
        json_agg(
            json_build_object(
                'complex_id', cx.complex_id,
               'complex_name', cx.complex_name
            )
        ) AS complex
    FROM
        company c
    INNER JOIN
        complex cx
    ON
        c.company_id = cx.company_id
    GROUP BY
        c.company_id,
        c.company_name,
        c.company_img
    HAVING
        c.company_id = $1
`

const GET_ROOMS = `
    SELECT
        c.complex_id,
        c.complex_name,
        json_agg(
            json_build_object(
                'roomsId', hr.rooms_id,
                'roomsName', hr.rooms_number
            )
        ) AS complex
    FROM
        complex c
    INNER JOIN
        home_rooms hr
    ON
        c.complex_id = hr.complex_id
    GROUP BY
        c.complex_id,
        c.complex_name
    HAVING
        c.complex_id = $1;
`
GET_ROOMS_INFO = `
    SELECT * FROM home_rooms WHERE rooms_id = $1;
`

GET_DURATION = `
    select distinct mortgage_duration_year from mortgage_duration ORDER BY mortgage_duration_year
`

GET_BANK = `
    SELECT
        b.bank_name,
        b.bank_upto,
        b.bank_img,
        m.mortgage_duration_year,
        m.starting_payment
    FROM
        bank b
    INNER JOIN
        mortgage_duration m
    ON
        b.bank_id = m.bank_id
    GROUP BY
        b.bank_name,
        b.bank_upto,
        b.bank_img,
        m.mortgage_duration_year,
        m.starting_payment
    HAVING
        m.mortgage_duration_year = $1 AND
        (b.bank_upto) > $2
    ORDER BY
        b.bank_upto
    LIMIT
        1;
`

ADD_COMPANY = `
INSERT INTO company(company_name, company_img) VALUES($1, $2)
`
DELETE_COMPANY = `
    DELETE FROM company WHERE company_id = $1
`

GET_ADMIN_COMPLEX = `
    SELECT
        c.company_name,
        c.company_img,
        c.company_id,
        json_agg(
            json_build_object(
                'complex_id', cx.complex_id,
                'complex_name', cx.complex_name
            )
        ) AS complex
    FROM
        company c
    LEFT JOIN
        complex cx
    ON
        c.company_id = cx.company_id
    GROUP BY
        c.company_id,
        c.company_name,
        c.company_img;

`

ADD_COMPLEX = `
    INSERT INTO complex(complex_name, company_id) VALUES($1, $2)
`

DELETE_COMPLEX = `
    DELETE FROM complex WHERE complex_id = $1
`

GET_COMPLEX_ROOMS = `
    SELECT
        c.complex_id,
        c.complex_name,
        cy.company_name,
        hr.home_address,
        json_agg(
            json_build_object(
                'roomsId', hr.rooms_id,
                'roomsNumber', hr.rooms_number,
                'roomsPriceSquare', hr.price_square,
                'roomsSquare', hr.rooms_square
            )
        ) AS complex
    FROM
        complex c
    INNER JOIN
        home_rooms hr
    ON
        c.complex_id = hr.complex_id
    JOIN
        company cy
    ON
        c.company_id = cy.company_id
    GROUP BY
        c.complex_id,
        c.complex_name,
        c.complex_id,
        cy.company_name,
        hr.home_address
    HAVING
        c.complex_id = $1
`

ADD_ROOMS = `
    INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES($1, $2, $3, $4, $5)
`

DELETE_ROOM = `
    DELETE FROM home_rooms WHERE rooms_id = $1
`

const getcompany = () => fetchData(GET_COMPANY)
const getcomplex = (companyId) => fetchData(GET_COMPLEX, companyId)
const getrooms = (complexId) => fetchData(GET_ROOMS, complexId)
const getroomsinfo = (roomsId) => fetchData(GET_ROOMS_INFO, roomsId)
const getduration = () => fetchData(GET_DURATION)
const getbank = (mortgage_duration, house_price) => fetchData(GET_BANK, mortgage_duration, house_price)
const addcompany = (company_name, company_img) => fetchData(ADD_COMPANY, company_name, company_img)
const deletecompany = (companyId) => fetchData(DELETE_COMPANY, companyId)
const deletecomplex = (complexId) => fetchData(DELETE_COMPLEX, complexId)
const getadmincomplex = () => fetchData(GET_ADMIN_COMPLEX)
const addcomplex = (complex_name, company_id) => fetchData(ADD_COMPLEX, complex_name, company_id)
const getcomplexrooms = (complexId) => fetchData(GET_COMPLEX_ROOMS, complexId)
const addrooms = (rooms_number, price_square, rooms_square, home_address, complex_id) => fetchData(ADD_ROOMS, rooms_number, price_square, rooms_square, home_address, complex_id)
const deleteroom = (roomId) => fetchData(DELETE_ROOM, roomId)
module.exports = {
    getcompany,
    getcomplex,
    getrooms,
    getroomsinfo,
    getduration,
    getbank,
    addcompany,
    deletecompany,
    getadmincomplex,
    addcomplex,
    deletecomplex,
    getcomplexrooms,
    addrooms,
    deleteroom
}