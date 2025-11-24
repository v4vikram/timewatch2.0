// middleware.js

import { NextResponse } from "next/server";

const NAKED_DOMAIN = "timewatchindia.com";
const WWW_DOMAIN = "www.timewatchindia.com";

export function middleware(request) {
  const url = request.nextUrl;
  const host = request.headers.get("host");
  const pathname = url.pathname;
  const search = url.search;
  
  let redirectUrl = null;

  // ------------------------------------------------------------
  // 1️⃣ Force HTTPS + Force www (301)
  // ------------------------------------------------------------
  const isNaked = host === NAKED_DOMAIN;
  const isWWW = host === WWW_DOMAIN;

  if (isNaked) {
    redirectUrl = `https://${WWW_DOMAIN}${pathname}${search}`;
  }

  // ------------------------------------------------------------
  // 2️⃣ Old URL → New URL redirect (market-place → products)
  //    Works for both naked & www domains
  // ------------------------------------------------------------
  if (pathname.startsWith("/market-place/")) {
    const newPath = pathname.replace("/market-place/", "/products/");
    redirectUrl = `https://${WWW_DOMAIN}${newPath}${search}`;
  }

  // If redirectUrl was set → perform SEO redirect
  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Otherwise allow the request
  return NextResponse.next();
}

// ------------------------------------------------------------
// ⛔ Exclude static files
// ------------------------------------------------------------
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
