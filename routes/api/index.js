var express = require("express");
var router = express.Router();

const tasks = require("../../src/tasks");
const items = require("../../src/items");


/* 商品一覧を取得するルーティング */
router.get("/items", function (req, res, next) {
  const itemsList = items.getListItem();
  res.send(itemsList);
});

/*１件の商品情報を取得するルーティング */
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});

/* タスク登録ルーティング */
router.post("/tasks", async function (req, res, next) {
  const postTasks = await tasks.postTasks(req.body);
  res.send(postTasks);
});

/* タスク一覧取得 */
router.get("/tasks", async function (req, res, next) {
  const getTasks = await tasks.getTasks();
  res.send(getTasks);
});

/* タスク一件取得　*/
router.get("/tasks/:id", async function (req,res, next) {
  const getTasksid = await tasks.getTasksid(req.params.id);
  res.send(getTasksid);
});

/*　タスク更新 */
router.patch("/tasks/:id", async function (req, res, next) {
  const patchTasksid = await tasks.patchTasksid(req.params.id, req.body);
  res.send(patchTasksid);
});

/* タスク削除 */
router.delete("/tasks/:id", async function (req, res, next) {
  const deleteTasksid = await tasks.deleteTasksid(req.params.id);
  res.send(deleteTasksid);
});

module.exports = router;
