const express = require("express");
const medicineRouter = express.Router();

const {getAllMedicines,createMedicine,updateMedicine,removeMedicine} = require("../Controllers/medicineController");
const { postMedicine, putMedicine, deleteMedicine} = require("../Services/medicineService");



medicineRouter.route("/medicines/:id?")
      .get(getAllMedicines)
      .post(postMedicine(),createMedicine)
      .put(putMedicine(),updateMedicine)
      .delete(deleteMedicine(),removeMedicine)
 module.exports = medicineRouter;