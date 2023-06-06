const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/create", userController.createNewUser);
router.get("/users", userController.findAll);
router.get("/user/:id", userController.findOne);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.delete("/users", userController.deleteAll);
router.get("/users/admin", userController.findAllAdmin);

module.exports = router;