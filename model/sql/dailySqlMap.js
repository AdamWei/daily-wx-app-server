const dailySqlMap = {
    add: 'insert into daily(id, uname, uid, yesterdaywork,complate,todayplan,problem) values(0, ?, ?, ?, ?, ?, ?)',
    deleteById: 'delete from user where id = ?',
    update: 'update user set username=?, password=? where id=?',
    list: 'select * from daily',
    getById: 'select * from user where id = ?'
};

module.exports = dailySqlMap;