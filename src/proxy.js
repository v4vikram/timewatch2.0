import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log('🟢 Middleware running for:', request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/about/:path*'],
}
