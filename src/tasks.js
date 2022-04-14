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

/*
getListNews = async function () {
    return "実装中";
};

exports.getListNews = this.getListNews;*/

exports.postTasks = postTasks;
