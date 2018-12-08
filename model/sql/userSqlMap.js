const userSqlMap = {
    add: 'insert into user(id, name, phone, icon) values(0, ?, ?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set username=?, password=? where id=?',
    list: 'select * from user',
    getById: 'select * from user where id = ?'
};

module.exports = userSqlMap;