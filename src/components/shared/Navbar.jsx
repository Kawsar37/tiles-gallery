"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import { router } from "better-auth/api";

function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const link = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/all-tiles"}>All Tiles</NavLink>
      </li>
      <li>
        <NavLink href={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 shadow-sm sticky top-0 z-10 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
            {session && (
              <li>
                <button
                  onClick={async () => {
                    await authClient.signOut();
                  }}
                  className="btn btn-warning rounded-full text-white md:hidden flex"
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link href="/">
          <Image src="/new.svg" alt="logo" height={60} width={60} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>

      <div className="navbar-end">
        {isPending ? (
          <div className="flex flex-col items-center justify-center">
            <Spinner color="accent" />
          </div>
        ) : session ? (
          <>
            <p className="mr-3 font-semibold">
              <span className="font-normal">Hello,</span> {session.user.name}
            </p>
            <Link href={"/my-profile"}>
              <img
                src={session?.user?.image}
                height={40}
                width={40}
                alt="dp"
                className="rounded-full mr-3 h-10 w-10 object-cover"
              />
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/");
                    },
                  },
                });
              }}
              className="btn btn-warning rounded-full text-white md:flex hidden"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            href={"/login"}
            className="btn btn-info rounded-full text-white"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
