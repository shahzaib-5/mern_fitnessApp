const express = require ("express");
const router = express.Router();
const Plan = require("../model/Plan")
const planController = require ("../controllers/plan-controller");
const auth = require("../middleware/auth");
const bodyParser = require("body-parser");
const multer = require ("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/backend/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname)
    }
  })
  const upload = multer({ storage: storage})


router.get("/",planController.getAllPlans);
router.post("/",upload.single('myFile'),planController.addPlan);
router.get("/:id",planController.getPlanById);
router.put("/:id",planController.updatePlan);
router.delete("/:id",planController.deletePlan);




module.exports = router;