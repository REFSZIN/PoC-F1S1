import { Request, Response } from "express";
import * as memeService from "../services/memeService";

export async function get(req: Request, res: Response) {
  const memes = await memeService.findAll();

  res.send(memes);
}

export async function create(req: Request, res: Response) {
  const meme = req.body;

  await memeService.insert(meme);

  res.sendStatus(201);
}
export async function delet(req: Request, res: Response) {
  res.sendStatus(201);
}

export async function update(req: Request, res: Response) {
  const patchmeme = req.body;

  await memeService.insert(patchmeme);

  res.sendStatus(201);
}
