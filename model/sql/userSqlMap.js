const userSqlMap = {
    add: 'insert into user(id, name, phone, icon, email, password) values(0, ?, ?, ?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set name=?, phone=?, icon=?, email=?, password=? where id=?',
    list: 'select * from user',
    getById: 'select * from user where id = ?',
    getByEmail: 'select * from user where email = ?',
};

module.exports = userSqlMap;