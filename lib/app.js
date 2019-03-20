const express = require("express");
const bodyParser = require("body-parser");
const rootRouter = require("./router");

const createApp = (_params) => {
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(rootRouter);
  
  return app;
};

module.exports = createApp;