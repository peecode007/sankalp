import { NextResponse } from 'next/server';
import { verifyToken } from './app/utils/auth';

// Add the paths that don't require authentication
const publicPaths = [
  '/login',
  '/register',
  '/forgot-password',
  '/api/auth/login',
  '/api/auth/register'
];

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Check if the path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Check for authentication token
  const token = request.cookies.get('auth-token')?.value;

  // If no token is present or token is invalid, redirect to login
  if (!token || !verifyToken(token)) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};