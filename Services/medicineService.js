const { body } = require("express-validator");
const Medicine = require("../Models/medicine");

module.exports.postMedicine= () => {
  return [
    body("name").isString().custom((value) => {
        return Medicine.findOne({ name: value }).then((medicine) => {
          if (medicine) {
            return Promise.reject("This medicine name already exist");
          }})
        }).withMessage("Medicine name should be string"),
        body("company").isString().withMessage("Company name should be string"),
        body("quantity").isNumeric().withMessage("medicine quantity should be number"),
        body("description").isString().withMessage("Description should be string"),
    ]
}
    

module.exports.putMedicine = () => {
  return [
    body("_id").isNumeric().withMessage("Id must be a number"),
    body("name").isString().custom((value) => {
        return Medicine.findOne({ name: value }).then((medicine) => {
          if (medicine) {
            return Promise.reject("This medicine name already exist");
          }})
        }).withMessage("Medicine name should be string"),
        body("company").isString().withMessage("Company name should be string"),
        body("quantity").isNumeric().withMessage("medicine quantity should be number"),
        body("description").isString().withMessage("Description should be string"),
  ];
};

module.exports.deleteMedicine = () => {
  return body("_id").isNumeric().withMessage("id is not a number");
};
