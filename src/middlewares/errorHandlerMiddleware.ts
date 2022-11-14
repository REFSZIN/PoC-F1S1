import { NextFunction, Request, Response } from "express";
import { AppError, errorTypeToStatusCode, isAppError } from "../utils/errorUtils";
import { STATUS_CODE } from "../enums/statusCode";

export function errorHandlerMiddleware(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // eslint-disable-next-line no-console
  console.log(err, next);

  if (isAppError(err)) {
    return res.status(errorTypeToStatusCode(err.type)).send(err.message);
  }

  return res.sendStatus(STATUS_CODE.SERVERERRORINTERNAL);
}
