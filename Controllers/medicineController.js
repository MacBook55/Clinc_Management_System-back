const Medicine = require("./../Models/medicine")
const { validationResult } = require("express-validator");

//get all speakers or one speakerr
exports.getAllMedicines= async(req,res,next)=>{
  if(req.params.id)
  {
    const medicine = await Medicine.findById(req.params.id);
    res.json(medicine)
  }else{
      const medicines = await Medicine.find()
      res.json(medicines);
  }
}

//-------------------------------------------------------

//post new speaker

exports.createMedicine=async(req,res,next)=>{

      // check errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        {
          error = new Error(" ");
          error.status = 422;
          error.message = errors.array().reduce((current, object) => current + object.msg + ", ", "");
          next(errors);
        }
      }
  let newMedicine = new Medicine({
       name:req.body.name ,
       company:req.body.company ,
       quantity:req.body.quantity ,
       description:req.body.description
      })


  const medicineData = await newMedicine.save();
  res.json({msg:"Medicine Added",medicineData})
}

//update speaker
 exports.updateMedicine=async(req,res,next)=>{

    let {_id,name,company ,quantity,description} = req.body;
    try{
        
        let medicine = await Medicine.findById({_id:_id})
        if(!medicine) res.json({msg:"No medicine with this id "})
        medicine.name=name
        medicine.company=company
        medicine.quantity=quantity
        medicine.description=description
        const updatedMedicine= await medicine.save()
        res.json({msg:"Medicine Updated",updatedMedicine})
    }catch(error)
    {    
        next(error.message);
    }

 }


//Delete speaker
exports.removeMedicine=async(req,res,next)=>{

    try {
      const deletedData = await Medicine.deleteOne({ _id: req.params.id});
      res.send({ msg: "Medicine deleted", deletedData });
    } catch (error) {
      next(error.message);
    }
}

