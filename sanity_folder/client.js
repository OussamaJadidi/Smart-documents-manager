import { signUp } from 'next-auth-sanity/client';
import { signIn } from 'next-auth/react';

const user = await signUp({
  nom,
  prenom
});

await signIn('sanity-login', {
  redirect: false,
  nom,
  prenom
});