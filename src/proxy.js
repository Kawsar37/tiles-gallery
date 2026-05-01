import { NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const { data: session } = await authClient.getSession();
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
