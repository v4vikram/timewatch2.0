// middleware.js

import { NextResponse } from 'next/server';

// Define the two hosts you want to manage
const NAKED_DOMAIN = 'timewatchindia.com';
// const NAKED_DOMAIN = 'localhost:3000';
const WWW_DOMAIN = 'www.timewatchindia.com';

export function middleware(request) {
  // console.log(":request", request)
  // Get the host header from the request
  const host = request.headers.get('host');
  
  // Extract the full path (including query params)
  const path = request.nextUrl.pathname + request.nextUrl.search;

  // console.log(":naked", `https://${NAKED_DOMAIN}${path}`)
  // console.log(":WWW_DOMAIN", `https://${host}${path}`)
  // 1. Check if the host is the naked domain
  if (`https://${host}${path}` === `https://${NAKED_DOMAIN}${path}`) {
    // console.log(":working")
    // 2. Construct the full www URL, enforcing HTTPS
    const wwwUrl = `https://${WWW_DOMAIN}${path}`;

    // 3. Return a permanent (301) redirect response
    // A 301 is crucial for SEO
    return NextResponse.redirect(wwwUrl, 301);
  }

  // If the host is already www, or any other subdomain, let the request continue
  return NextResponse.next();
}

// Optional: Configure the matcher to run the middleware on all paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static assets)
     * - _next/image (image optimization files)
     * - public files (e.g., favicon.ico)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};