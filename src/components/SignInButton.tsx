"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
  return (
    <Button
      className="rounded-lg   px-4 py-1 text-lg font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:from-green-500 hover:to-cyan-600"
      style={{
        fontSize: "15px",
        textDecoration: "none",
        display: "inline-block",
      }}
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
