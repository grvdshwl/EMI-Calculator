const express = require("express");
const userRoute = require("./user.route.js");
const historyRoute = require("./history.route.js");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/history",
    route: historyRoute,
  },
];

defaultRoutes.map((route) => {
  return router.use(route.path, route.route);
});

module.exports = router;
