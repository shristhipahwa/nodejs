var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  dishSchema = new Schema({
  dish:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Dish'
  }},{
  timestamps:true

});



var favoriteSchema =  new Schema({
user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User',
  required:true,
  unique:true
},
dishes:[dishSchema]
},
{timestamps:true}
);

var Favorites = mongoose.model("Favorite",favoriteSchema);

module.exports = Favorites;
