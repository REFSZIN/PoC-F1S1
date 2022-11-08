import { Request, Response } from 'express';
import * as memeService from '../services/memeService';

const nome: string = "Yan";
const valor: number = 212;

export async function get(req: Request, res: Response) {
  const memes = await memeService.findAll();

  res.send(memes);
}

export async function create(req: Request, res: Response) {
  const meme = req.body;

  await memeService.insert(meme);

  res.sendStatus(201);
}
