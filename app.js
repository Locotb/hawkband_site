const http = require('http');
const url = require('url');
const mysql = require('mysql2/promise');
let mysqlConfig = require('./config-mysql.json');

http.createServer(async (request, response) => {

    let urlRequest = url.parse(request.url, true);
    if (urlRequest.query.test == 7) {
        const connection = await mysql.createConnection(mysqlConfig);

        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        let Data = new Date();
        let month = Data.getMonth();

        let responseDB = await connection.execute('SELECT * FROM time_online');
        responseDB[0].forEach(item => {
            item.currMonth = months[month];
            item.times1 = item[`time${month}`]; // если в таблице в бд еще нет нового месяца, то будет отображаться NaN
            if (month === 0) {
                item.prevMonth = months[month + 11];
                item.times2 = item[`time${month + 11}`];
            } else {
                item.prevMonth = months[month - 1];
                item.times2 = item[`time${month - 1}`];
            }
        });
        
        let json = JSON.stringify(responseDB[0]);
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.end(json);
        connection.end();
    }
    else response.end("!");

}).listen(3000);

