const { response } = require('express');
var Userdb = require('../models/order');

exports.order = (req,res)=>{   
    const order = new Userdb({
        Name:req.body.name,
        Email:req.body.email, 
        Phone_number:req.body.phone,
        food_name:req.body.foodname,
        Quantity:req.body.quantity,
        Price:req.body.price,
        Description:req.body.description,
    });
    // save product in the database
    order
        .save(order)
        .then(data => {
            //res.send(data)
            res.redirect('/menu');
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
