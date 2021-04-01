export default {
    actions: {
        async fetchInfo(ctx) {
            // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=7');
            // const json = await response.json();
            // ctx.commit('update', json);

            // const mysql = require('mysql2/promise');
            // const mysqlConfig = require('@/config-mysql.json');
            // const connection = await mysql.createConnection(mysqlConfig);
            // const response = await connection.execute(`SELECT * FROM time_online`);
            // connection.end();

            // const response = {name: 'John', age: 20};
            // const json = await response.json()


            let xml = new XMLHttpRequest();
            xml.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    myFunction(this.responseText);
                }
            }

            xml.open('GET', 'http://localhost:3000?test=7');
            xml.send();

            function myFunction(data) {
                let result = JSON.parse(data);
                ctx.commit('update', result);
            }      

        }
    },
    mutations: {
        update(state, json) {
            state.items = json;
            state.currMonth = json[0].currMonth;
            state.prevMonth = json[0].prevMonth;
        },
    },
    state: {
        items: [],
        currMonth: '',
        prevMonth: '',
    },
    getters: {
        currMonth(state) {
            return state.currMonth;
        },
        prevMonth(state) {
            return state.prevMonth;
        },
        allItems(state) {
            return state.items;
        },
    }
}