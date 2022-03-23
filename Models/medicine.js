const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const medicine_schema = new mongoose.Schema({
  _id: { type: Number, alias: "medicine_id" },
  name:{type:String , required:true},
  company:{type:String , required:true},
  quantity:{type:Number , required:true},
  description:{type:String , required:true},

});

medicine_schema.plugin(AutoIncrement, { inc_field: "medicine_id" });

const Medicine = mongoose.model("medicine", medicine_schema);

module.exports = Medicine;
