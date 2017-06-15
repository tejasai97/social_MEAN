var mangoose= require("mongoose");
module.export =mongoose.model('User', {
  email:String,
  password:String
});
