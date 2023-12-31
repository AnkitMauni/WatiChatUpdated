const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const userMenu = new mongoose.Schema({
  
    title:{
        type: String,
        require:true,
    },
    perentMenu:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
 
},
{ collection: 'userMenu' })

userMenu.plugin(timestamp, {
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = mongoose.model("userMenu",userMenu);
