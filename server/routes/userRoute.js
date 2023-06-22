const express = require("express");
const { getAllcont, deleteUser, addUser, updateUser } = require("../controller/userController");



const router = express.Router();


router.get("/user", getAllcont);



// Add a new document to the collection
router.post("/user", addUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", updateUser);


module.exports = router;