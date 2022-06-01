const { response } = require('express');
var Userdb = require('../models/addProduct');

// create and insert new product
exports.create = (req,res)=>{
 
    console.log("In Create");
    
    const user = new Userdb({
       food_name:req.body.food_name,
       Ingredients:req.body.Ingredients, 
       Category:req.body.Category,
       Description:req.body.Description,
       Price:req.body.Price,
    });
    console.log(user);
    // save product in the database
    user
        .save(user)
        .then(data => {
            res.redirect('/adminUI/admin');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

        const { food_name, Ingredients, Category, Description, Price} = req.body;
        let errors = [];

        if (!food_name || !Ingredients || !Category || !Description || !Price) {
        errors.push({ msg: "Please enter all fields" });
  }

}


exports.find =  async(req,res)=>
{
    const product= await Userdb.find();
    res.json(
        product
   )
}

//Updating a product
exports.update= async(req,res)=>{

    console.log("In Update");
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.redirect("/adminUI/admin");
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


//Deleting a Product
exports.delete=async(req,res)=>{

    console.log("Inside DEL");

    const id = req.params.id;
    console.log(id);
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.redirect("/adminUI/admin");
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}