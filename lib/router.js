const { Router } = require("express");

const rootRouter = Router();

/**
 * Service health check
 */
rootRouter.get("/healthz", (_req, res, _next) => {
  res
    .status(200)
    .json("ok")
});

/**
 * 404 route
 */
rootRouter.use((_req, res, _next) => {
  res
    .status(404)
    .json("Not found");
});


module.exports = rootRouter;