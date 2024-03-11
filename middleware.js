import { NextResponse } from "next/server";

export function middleware(request) {
  

  //   if (request.nextUrl.pathname != "/login") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  // }
  return NextResponse.redirect(new URL("/login", request.url));

  // console.log("middleware running")
  // return NextResponse.json({ success: "Successfully running" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
// * - all paths
// export const config = {
//   matcher: ["/about/:path*", "/studentlist/:path*"],
// };