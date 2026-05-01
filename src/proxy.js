import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const { session } = await auth.api.getSession({
    query: {
      disableCookieCache: true,
    },
    headers: await headers(), // headers containing the user's session token
  });
  // console.log("hello", session);
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ["/tile/:path*", "/my-profile", "/my-profile/update-profile"],
};
