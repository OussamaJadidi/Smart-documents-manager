"use client"
import {  useSession } from "next-auth/react";

const Home = () => {
  const data = useSession();

  const usehr = data.user;
  console.log(data)
  return (
    <div>
      <h1>Hello, {JSON.stringify(data)}</h1>
    </div>
  );
};

export default Home;
