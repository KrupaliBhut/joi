const Joi = require('joi');

const dataSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(5).required()
})
const userValidation = async (req,res)=>{
    const payload = {
        email : req.body.email,
        password : req.body.password
    }
    const { error }= dataSchema.validate(payload);
    if(error){
        return res.status(400).json({
            error: error.details[0].message
        })
    }else{
        next();
    }
}
module.exports = {userValidation}