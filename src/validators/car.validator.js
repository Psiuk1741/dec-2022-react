import Joi from "joi";

const carValid =  Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Має містити від 1 до 20 літер',
        'string.required': 'Поле обов\'язкове'
    }),

    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()

})

export {carValid}