const pool = require('./connect.js')
const userSqlMap = require('./userSqlMap.js')

module.exports = {
    add: async function (user) {
        console.log(user)
        let res = await pool.query(userSqlMap.add, [user.name, user.phone, user.icon])
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
    deleteById: async function (id) {
        let res = await pool.query(userSqlMap.deleteById, id);
        console.log(res)
        return res;
    },
    update: async function (user) {
        let res = await pool.query(userSqlMap.update, [user.username, user.password, user.id]);
        console.log(res)
        return res;
    }
};

