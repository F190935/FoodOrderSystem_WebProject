const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    food_review:{
        type:String,
        required:true,
    },
   food_rating:{
       type:Number,
       required:true,
   },
});

module.exports = mongoose.model('Reviews', UserSchema);