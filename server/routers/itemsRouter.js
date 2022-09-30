const express = require("express");
const { ItemsContrtoller } = require("../controllers/itemsController");
const itemsRouter = express.Router();

itemsRouter.get("/items", ItemsContrtoller.getItems);
itemsRouter.post("/init", ItemsContrtoller.initItems);

exports.itemsRouter = itemsRouter;