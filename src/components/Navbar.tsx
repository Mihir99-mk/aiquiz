import Link from "next/link";
import React from "react";
import { GiMoebiusTriangle } from "react-icons/gi";

import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-[80px] border-b border-zinc-300 py-4 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href={"/"} className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-lg md:text-xl font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white">
            <GiMoebiusTriangle className="w-8 h-8" />
            Ai Quiz
          </p>
        </Link>
        <div className="flex item-center gap-3 sm:gap-4 md:gap-6">
          <div className="  text-black  ">
            <Link href={"/"} className="flex items-center  ">
              <p className="text-[16px] dark:text-white  py-2 font-bold relative after:bg-green-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                Home
              </p>
            </Link>
          </div>
          <div className="  text-black   ">
            <Link href={"/quiz"} className="flex items-center  ">
              <p className="text-[16px] dark:text-white  py-2 font-bold relative after:bg-green-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                Quiz
              </p>
            </Link>
          </div>
          <div className="  text-black  ">
            <Link href={"/history"} className="flex items-center  ">
              <p className="text-[16px] dark:text-white py-2  font-bold relative after:bg-green-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                History
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
