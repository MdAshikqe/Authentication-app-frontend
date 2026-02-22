import { NextRequest, NextResponse } from "next/server";

type UserRole = "ADMIN" | "CLIENT" | "SUPER_ADMIN";

//exact: ["/my-profile","/setting"]
//patterns: [/^\/dashboard/, /^\/admin/] // route starting /dashboard/* /admin/*
type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

const authRoutes = [
  "/login",
  "/create-client",
  "/refress-token",
  "/change-password",
  "/forgot-password",
  "/reset-password",
];

const commonProtectionRoutes: RouteConfig = {
  exact: ["/get-my-profile", "/update-my-profile"],
  patterns: [],
};

const adminProtectionRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

const clientProtectionRoutes: RouteConfig = {
  patterns: [/^\/client/],
  exact: [],
};
export function proxy(request: NextRequest) {
  console.log("pathname", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
