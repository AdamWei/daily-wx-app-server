const pool = require('../model/connect.js')
const dailySqlMap = require('../model/sql/dailySqlMap.js')

module.exports = {
    add: async function (daily) {
        console.log(daily)
        let res = await pool.query(dailySqlMap.add, [daily.uname, daily.uid, daily.yesterdaywork,daily.complate,daily.todayplan,daily.problem])
        return res;
    },
    list: async function () {
        let res = await pool.query(dailySqlMap.list)
        console.log(res)
        return res;
    },
    // getById: async function (id) {
    //     let res = await pool.query(dailySqlMap.getById, id);
    //     console.log(res)
    //     return res;
    // },
    // deleteById: async function (id) {
    //     let res = await pool.query(dailySqlMap.deleteById, id);
    //     console.log(res)
    //     return res;
    // },
    // update: async function (user) {
    //     let res = await pool.query(dailySqlMap.update, [user.username, user.password, user.id]);
    //     console.log(res)
    //     return res;
    // }
};

