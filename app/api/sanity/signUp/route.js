import { signUpHandler } from 'next-auth-sanity';
import { client } from 'your/sanity/client';

export const POST = signUpHandler(client);