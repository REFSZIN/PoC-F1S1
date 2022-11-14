import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { STATUS_CODE } from "../enums/statusCode";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(STATUS_CODE.ERRORUNPROCESSABLEENTITY).send({ error: validation.error.message });
    }
    next();
  };
}
