// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Check if the user is authenticated (for example, if a token exists in cookies)
  const token = req.cookies.get('authToken');

  // If trying to access /product but not authenticated, redirect to /login
  if (req.nextUrl.pathname.startsWith('/product') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow the request if the user is authenticated or accessing another route
  return NextResponse.next();
}

// Apply the middleware to specific routes
export const config = {
  matcher: ['/product/:path*'], // Apply middleware to all /product routes
};
