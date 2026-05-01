"use client";
import { Spinner } from "@heroui/react";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-2 min-h-[70vh] justify-center">
      <Spinner color="accent" />
      <span className="text-xs text-muted">Loading...</span>
    </div>
  );
}
