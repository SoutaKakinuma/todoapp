//新規登録

const mysql = require("mysql2/promise");
const config = require("../config.js");

//タスク新規登録 


postTasks = async function (body) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL記述
        const sql =
            "INSERT INTO todoapp.t_task (task_name, deadline, category_id) VALUES (?, ?, ?);";
        let d = [body.taskName, body.deadline, body.category];
        const [rows, fields] = await connection.query(sql, d);

        //console.log(rows);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};


getTasks = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT task_name, deadline, category_id FROM t_task";
        const [rows, fields] = await connection.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

getTasksid = async function (id) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting)
        //SQL
        const sql =
            "SELECT task_name, deadline, category_id FROM t_task";
        let d = [id]    
        const [rows, fields] =await connection.query(sql, d);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

patchTasksid = async function (id, body) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting)
        //SQL
        const sql =
            "UPDATE t_task SET task_name=?, deadline=?, category_id=?, task_status=?, updated_at=? WHERE id=?;"
        let d = [body.taskName, body.deadline, body.category, body.status, new Date(), id,];
        const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
    }
};

exports.postTasks = postTasks;
exports.getTasks = getTasks;
exports.getTasksid = getTasksid;
