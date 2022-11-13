import { STATUS_CODE } from "../enums/statusCode";

type AppErrorTypes = "conflict" | "not_found";

export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: AppErrorTypes) {
  if (type === "conflict") return STATUS_CODE.ERRORCONFLICT;
  if (type === "not_found") return STATUS_CODE.ERRORNOTFOUND;
  return STATUS_CODE.ERRORBADREQUEST;
}
