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

/*ソート機能(作成順)*/
router.get("/tasks1", async function (req, res, next) {
  const getTasksDeadline = await tasks.getTasksDeadline();
  res.send(getTasksDeadline);
});

/*今日のタスク取得*/
router.get("/tasks2", async function(req, res, next) {
  const gettasksToday = await tasks.gettasksToday();
  res.send(gettasksToday);
});

/*ソート機能(新規作成順)*/
router.get("/tasks3", async function (req,res,next) {
  const gettasksNew = await tasks.gettasksNew();
  res.send(gettasksNew);
});

/*ステータスが完了したタスク*/
router.get("/tasks4", async function (req,res,next) {
  const gettasksFinish = await tasks.gettasksFinish();
  res.send(gettasksFinish);
}); 

/*ステータスが進行中のタスク*/
router.get("/tasks5", async function (req, res, next) {
  const gettasksstatus = await tasks.gettasksstatus();
  res.send(gettasksstatus);
});

/*ステータスが遅れているタスク*/
router.get("/tasks6", async function (req, res, next) {
  const gettasksslow = await tasks.gettasksslow();
  res.send(gettasksslow);
});

module.exports = router;
