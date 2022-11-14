import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AuthSchema } from "../schemas/Schemas";
import { STATUS_CODE } from "../enums/statusCode";

export const SECRET_KEY: Secret = process.env.JWT_SECRET;

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export function userAuthController(req: Request, res: Response, next: NextFunction) {
  const validation = AuthSchema.validate(req.body);
  if (validation.error) {
    return res.status(STATUS_CODE.ERRORUNPROCESSABLEENTITY).send({ error: validation.error.message });
  }
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;
    next();
  } catch (err) {
    res.status(STATUS_CODE.ERRORBADREQUEST).send("You needed auth");
  }
}

