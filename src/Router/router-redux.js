const { Router } = require("express");
const controller = require("../controller/redux-controller");

const router = Router();

router.post("/reduxlogin-post", controller.createData);
// router.get("/employee-get", readData);

module.exports = router;
