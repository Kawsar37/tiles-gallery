"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${path === href ? "border-b-3 rounded-none border-[#576fcf]" : "rounded-none border-b-3 border-b-transparent"}`}
    >
      {children}
    </Link>
  );
}
