"use client";
import { signIn } from "next-auth/react";
import React from "react";

const ButtonSignIn = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};

export default ButtonSignIn;
