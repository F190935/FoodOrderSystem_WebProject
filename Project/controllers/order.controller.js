const { response } = require('express');
var Orders = require('../models/order');

exports.order = (req,res)=>{   
    const order = new Orders({
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

exports.orders = (req, res) =>
Orders.find({}, function (err, ord) {
    if (err) {
      console.log(err);
    }
    res.render("adminUI/orders", {
      user: req.user,
      ord,
      layout: "layouts/Layout",
    });
});

exports.delete=async(req,res)=>{

    const id = req.params.id;  

    Orders.findByIdAndDelete(id)
    .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with Name ${id}. Maybe id is wrong`})
            }else{
                res.redirect("/order/display_order");
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with Name =" + id
            });
        });
}

exports.updateOrder= async(req,res)=>{

    const id = req.params.id;
    Orders.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.redirect("/order/display_order");
            }
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send({ message : "Error Update user information"})
        })
}

exports.update= (req, res) =>
    Orders.findById(req.query.id, function (err, ord) {
      if (err) {
        console.log(err);
      }
      res.render("adminUI/updateOrder", {
        user: req.user,
        ord,
        layout: "layouts/Layout",
      });
})