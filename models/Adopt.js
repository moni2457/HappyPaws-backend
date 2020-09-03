/************
 * Author: Vigneshwari Ravichandran
 **********/

const mongoose = require('mongoose');

//schema
const AdoptSchema = new mongoose.Schema({

   email: {
       type: String,
       required: [true, 'Please add your Email ID'],
       unique:false
   },
   
   userAnswer: {
       type: String,
       required: [true, 'Please select event']
   },
   adoptDate: {
       type: Date,
       required:true
   },
   petName: {
    type: String,
    required: [true, 'No Pet Name']
},
});

module.exports = Adopt = mongoose.model('Adopt', AdoptSchema);