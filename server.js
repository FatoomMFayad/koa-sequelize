const Koa = require("koa");
const Router = require("koa-router");
const koaParser = require("koa-parser");

const app = new Koa();
const PORT = 4000;

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);
