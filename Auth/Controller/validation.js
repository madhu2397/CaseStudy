const joi = require('@hapi/joi');

const registerschema = joi.object({
    name: joi.string().min(6).required(),
    password: joi.string().min(6).required(),
    email: joi.string().email().lowercase().required(),
})

const loginschema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(6).required()
})
module.exports = {registerschema, loginschema};
// const registerValidation = (data) => {
//     const schema = joi.object({
//         name: joi.string().min(6).required(),
//         email: joi.string().lowercase(),
//         password: joi.string().required(),
//     });
//     return schema.validate(data, schema);
//   };
