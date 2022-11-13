export type memes = {
  id: number
  url: string
  title: string
  description: string
  userId: number
};

export type user = {
  id: number
  name: string
  email: string
  password: string
};

export type TypeMemeData = Omit<memes, "id">;
export type TypeUserData = Omit<user, "id">;
export type UpdateMemeData = Partial<memes>;
