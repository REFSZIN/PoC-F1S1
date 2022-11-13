import { Request, Response } from "express";
import * as userService from "../services/userService";

export async function getuser(req: Request, res: Response) {
  const memes = await userService;

  res.send(memes);
}

export async function createuser(req: Request, res: Response) {
  const meme = req.body;

  await userService;

  res.sendStatus(201);
}
