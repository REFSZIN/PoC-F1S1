import Joi from "joi";

export const memeSchema = Joi.object({
  url: Joi.string().uri().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  userId: Joi.number().required()
});

export const AuthSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

