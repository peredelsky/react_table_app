const express = require("express");
const { itemsRouter } = require("./routers/itemsRouter");
const app = express();
const port = 5000;

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");
  res.header("Access-Control-Allow-Headers", "accept, content-type, if-modified-since");
next();
})
app.use(itemsRouter);

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on :${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
