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
            "INSERT INTO todoapp.t_task (task_name, task_detail, deadline, category_id) VALUES (?, ?, ?, ?);";
        let d = [body.taskName, body.taskDetail, body.deadline, body.category];
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
            "SELECT t_task.id, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status FROM t_task;";
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
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT t_task.id, m_category.category_name, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.id = ?;";
        let d = [id];    
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
            "UPDATE t_task SET task_name=?, task_detail=?, deadline=?, category_id=?, task_status=?, updated_at=? WHERE id=?;"
        let d = [body.taskName, body.taskDetail, body.deadline, body.category, body.status, new Date(), id,];
        const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
    }
};

deleteTasksid = async function (id) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting)
        //SQL
        const sql =
            "DELETE FROM t_task WHERE id = ?;";
        let d = [id];
        const [rows, fields] = await connection.query(sql, d);
        return rows;
    } catch (err) {
      console.log(err);
    } finally {
      connection.end();
    }
};

getTasksDeadline = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT t_task.id, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status FROM t_task ORDER BY t_task.deadline;";
        const [rows, fields] = await connection.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

gettasksToday = async function () {
    let connection = null;
    //var hiduke=new Date();
    try {
        connection = await mysql.createConnection(config.dbSetting);
        const sql =
            "SELECT t_task.id, m_category.category_name, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.deadline = ?;";
        let d = new Date();
        const [rows, fields] = await connection.query(sql, d);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

gettasksNew = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT t_task.id, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status FROM t_task ORDER BY t_task.id DESC;";
        const [rows, fields] = await connection.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

gettasksFinish = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT t_task.id, m_category.category_name, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.task_status = 2;";
        const [rows, fields] = await connection.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

gettasksstatus = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT t_task.id, m_category.category_name, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.task_status = 1;";
        const [rows, fields] = await connection.query(sql);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }
};

gettasksslow = async function () {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //SQL
        const sql =
            "SELECT t_task.id, m_category.category_name, t_task.task_name, t_task.task_detail, t_task.deadline, t_task.category_id, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.task_status = 3;";
        const [rows, fields] = await connection.query(sql);
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
exports.patchTasksid = patchTasksid;
exports.deleteTasksid = deleteTasksid;
exports.getTasksDeadline = getTasksDeadline;
exports.gettasksToday = gettasksToday;
exports.gettasksNew = gettasksNew;
exports.gettasksFinish = gettasksFinish;
exports.gettasksstatus = gettasksstatus;
exports.gettasksslow = gettasksslow;