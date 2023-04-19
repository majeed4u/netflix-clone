import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { email, password, name } = req.body;
  const existingUser = await prismadb.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return res.status(409).json({ error: 'email already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prismadb.user.create({
    data: {
      email,
      name,
      hashedPassword,
      image: '',
      emailVerified: new Date(),
    },
  });
  res.status(201).json(user);
  try {
  } catch (error) {
    return res.status(400).end();
  }
}
