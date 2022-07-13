CREATE DATABASE building;

CREATE TABLE company(
    company_id bigserial not null PRIMARY KEY,
    company_name varchar(32) not null,
    company_img varchar(100) not null
);

INSERT INTO company(company_name, company_img) VALUES('Golden House', 'https://www.afisha.uz/ui/materials/2019/05/0733060_b.jpeg');
INSERT INTO company(company_name, company_img) VALUES('Tashkent city', 'https://www.gazeta.uz/media/img/2018/10/k9eiJF15384614387043_b.jpg');

CREATE TABLE complex(
    complex_id bigserial not null PRIMARY KEY,
    complex_name varchar(32),
    company_id int not null,
        FOREIGN KEY(company_id)
	        REFERENCES company(company_id)
                ON DELETE CASCADE
);

INSERT INTO complex(complex_name, company_id) VALUES('Olmazor', 1);
INSERT INTO complex(complex_name, company_id) VALUES('Yunusobod', 1);
INSERT INTO complex(complex_name, company_id) VALUES('Chinoz', 1);
INSERT INTO complex(complex_name, company_id) VALUES('Chilonzor', 2);
INSERT INTO complex(complex_name, company_id) VALUES('Sergili', 2);
INSERT INTO complex(complex_name, company_id) VALUES('Qoyliq', 2);

CREATE TABLE home_rooms(
    rooms_id bigserial not null,
    rooms_number decimal not null,
    price_square decimal not null,
    rooms_square decimal not null,
    home_address varchar(64) not null,
    complex_id int not null,
        FOREIGN KEY (complex_id)
            REFERENCES complex(complex_id)
                ON DELETE CASCADE
);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(2, 4000000, 46, 'Olmazor metro', 1);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(3, 4500000, 64, 'Olmazor metro', 1);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(4, 5000000, 78, 'Olmazor metro', 1);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(5, 5500000, 86, 'Olmazor metro', 1);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(6, 6000000, 98, 'Olmazor metro', 1);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(2, 4800000, 50, 'Yunusobod metro', 2);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(3, 5500000, 60, 'Yunusobod metro', 2);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(4, 5800000, 70, 'Yunusobod metro', 2);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(5, 6300000, 80, 'Yunusobod metro', 2);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(6, 6600000, 90, 'Yunusobod metro', 2);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(2, 3800000, 43, 'Chinoz', 3),
        (3, 4300000, 53, 'Chinoz', 3),
        (4, 5800000, 67, 'Chinoz', 3),
        (5, 6400000, 75, 'Chinoz', 3),
        (6, 6800000, 89, 'Chinoz', 3);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(2, 3800000, 55, 'Chilonzor metro', 4),
        (3, 7300000, 65, 'Chilonzor metro', 4),
        (4, 7800000, 75, 'Chilonzor metro', 4),
        (5, 7400000, 85, 'Chilonzor metro', 4),
        (6, 7800000, 95, 'Chilonzor metro', 4);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(2, 5600000, 51, '5-bekat', 5),
        (3, 6600000, 61, '5-bekat', 5),
        (4, 7600000, 71, '5-bekat', 5),
        (5, 8600000, 81, '5-bekat', 5),
        (6, 9600000, 91, '5-bekat', 5);

INSERT INTO home_rooms(rooms_number, price_square, rooms_square, home_address, complex_id) VALUES(2, 5000000, 58, 'Qoyliq dehqon bozori', 6),
        (3, 6000000, 68, 'Qoyliq dehqon bozori', 6),
        (4, 7000000, 78, 'Qoyliq dehqon bozori', 6),
        (5, 8000000, 88, 'Qoyliq dehqon bozori', 6),
        (6, 9000000, 98, 'Qoyliq dehqon bozori', 6);

CREATE TABLE bank(
    bank_id bigserial not null PRIMARY KEY,
    bank_name varchar(32) not null,
    bank_upto decimal not null,
    bank_img text not null
);

INSERT INTO bank(bank_name, bank_upto, bank_img) VALUES('Agro bank', 500000000, 'https://agrobank.uz/img/logo_thumbnail.png');
INSERT INTO bank(bank_name, bank_upto, bank_img) VALUES('Anor bank', 600000000, 'https://bankxizmatlari.uz/upload/iblock/46d/7jjh6ahpmghxh9rodqll0j5ouyg9hr58/Anorbank_mini.png');
INSERT INTO bank(bank_name, bank_upto, bank_img) VALUES('Xalq bank', 900000000, 'https://www.spot.uz/media/img/2019/08/0BmIYN15658527829995_l.jpg');
INSERT INTO bank(bank_name, bank_upto, bank_img) VALUES('Qishloq bank', 400000000, 'https://bank.uz/upload/iblock/d9a/d9aef7330c0f4c695e821689136de332.png');

CREATE TABLE mortgage_duration(
    mortgage_duration_id bigserial not null,
    mortgage_duration_year decimal not null,
    starting_payment decimal not null,
    bank_id int not null,
        FOREIGN KEY (bank_id)
            REFERENCES bank(bank_id)
);

INSERT INTO mortgage_duration(mortgage_duration_year, starting_payment, bank_id) VALUES(8, 10, 1),
(15, 20, 1),
(25, 30, 1);

INSERT INTO mortgage_duration(mortgage_duration_year, starting_payment, bank_id) VALUES(8, 17, 4),
(10, 23, 4),
(12, 25, 4),
(15, 30, 4),
(25, 35, 4);

INSERT INTO mortgage_duration(mortgage_duration_year, starting_payment, bank_id) VALUES(12, 20, 2),
(15, 30, 2),
(25, 40, 2);

INSERT INTO mortgage_duration(mortgage_duration_year, starting_payment, bank_id) VALUES(8, 20, 3),
(10, 25, 3),
(12, 25, 3),
(15, 30, 3),
(25, 35, 3);
