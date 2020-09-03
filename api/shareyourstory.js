
/************
 * Author: Moni Shah 
 **********/
const Story = require('../models/ShareyourStory');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//POST Api call for sharing story
exports.share = (req, res, next) => {
    try {
        const { email, story } = req.body;
        // Validations 
        if ( !email || !story) {
            return res.status(400).json({ msg: 'Please enter all the fields' });
        }
       
        const newStory = new Story({
           email, story
        })
        newStory.save()
                    .then(story => {
                       return res.status(200).json({
                            success: true,
                            msg: 'Story Shared successfully'
                        })
                    });
    } catch (err) {
        console.log(err)
    }
}