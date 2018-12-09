const userModal = require('../model/user.js')

module.exports = {
    add: async function (user) {
        const data = [user.name, user.phone, user.icon, user.email, user.password]
        const res = await userModal.add(data)
        if(res.affectedRows > 0){
            return {
                code: 200,
                message:"ok",
                data: res.insertId
            }
        }

        return {
            code: 10001,
            message:"用户添加失败",
            id: null
        }
    },
    login: async function (user) {
        let res = await userModal.getByEmail(user.email)
        if(res.length === 0){
            return {
                code: 201,
                message: "用户不存在",
            }
        }
        if(res[0].password != user.password) {
            return {
                code: 202,
                message: '用户密码不正确',
            }
        }
        return {
            code: 200,
            message: "ok"
        }
    },
    edit: async function(user) {
        const data = [user.name, user.phone, user.icon, user.email, user.password, user.id]
        let result = await userModal.update(data)
        return result
    },
    list: async function () {
        let res = await userModal.list()
        return res;
    },
    getById: async function (id) {
        let res = await userModal.getById(user.id)
        console.log(res)
        return res;
    },
    deleteById: async function (id) {
        let res = await userModal.getById(user.id)
        console.log(res)
        return res;
    },
};

