const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");
var methodOverride = require('method-override');

router.use(methodOverride('_method'));
router.get("/", linkController.allLinks)
router.get("/add", (req, res) => { res.render("add.ejs", {error:false, body:{}})});
router.get("/bancodb/:title", linkController.redirect);
router.get("/edit/:id", linkController.loadLink);


router.post("/", express.urlencoded({extended:true}), linkController.addLink);
router.post("/edit/:id", express.urlencoded({extended:true}), linkController.editLink);


router.delete("/:id", linkController.deleteLink);
router.delete("/", express.json(), linkController.deleteLink);


module.exports = router;