import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-center text-blue-300 space-y-4 min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-6xl font-bold">404!</h1>
      <h1 className="text-4xl font-semibold">Page Not Found!</h1>
      <Link href={"/"}>
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
}
