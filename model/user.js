const pool = require('./connect.js')
const userSqlMap = require('./sql/userSqlMap.js')

module.exports = {
    add: async function (data) {
        let res = await pool.query(userSqlMap.add, data)
        return res;
    },
    list: async function () {
        let res = await pool.query(userSqlMap.list)
        console.log(res)
        return res;
    },
    getById: async function (id) {
        let res = await pool.query(userSqlMap.getById, id);
        console.log(res)
        return res;
    },
    getByEmail: async function (email) {
        let res = await pool.query(userSqlMap.getByEmail, email);
        console.log(res)
        return res;
    },
    deleteById: async function (id) {
        let res = await pool.query(userSqlMap.deleteById, id);
        console.log(res)
        return res;
    },
    update: async function (data) {
        let res = await pool.query(userSqlMap.update, data);
        console.log(res)
        return res;
    }
};

