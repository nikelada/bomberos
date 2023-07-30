//crear modelo de inventario
// Path: src\models\ntificaton.js
const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  equipment_name: {    
    type: String,
    required: true,
  },
  equipment_code: {
    type: Number,
    required: true
  },
  equipment_description: {
    type: String,
    required: false
  },
  quantity_available: {  
    type: Number,
    required: true
  },
  acquisition_date: {  
    type: String,
    required: false
  },
  expiration_date: {  
    type: String,
    required: false
  },
});
module.exports = mongoose.model('inventory', inventorySchema);
