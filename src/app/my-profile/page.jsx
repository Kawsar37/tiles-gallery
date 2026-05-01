"use client";
import Image from "next/image";
import React from "react";
import Loading from "../loading";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col gap-6 items-center mt-20 mb-20 lg:mb-40">
      <div>
        <img
          height={100}
          width={100}
          alt="dp"
          src={session.user.image}
          className="rounded-full h-50 w-50 object-cover"
        />
      </div>
      <p className="font-semibold text-xl">Name: {session.user.name}</p>
      <p className="text-lg">Email: {session.user.email}</p>
      <Link href={`/my-profile/update-profile`}>
        <Button variant="secondary">Update Profile</Button>
      </Link>
    </div>
  );
}
