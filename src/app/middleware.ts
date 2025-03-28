import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware Logic
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPrivatePath = path === "/dashboard";
    
    // Retrieve the token from cookies
    const token = request.cookies.get("token")?.value || "";

    // If the user is on a public URL with a token set, redirect to the home page and clear the token
    if (!isPrivatePath && token) {
        const response = NextResponse.redirect(new URL("/", request.nextUrl));
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0) // Expire the token immediately
        });
        return response;
    }

    // If the user is trying to access a private route (like /dashboard) without a token, redirect to login
    if (isPrivatePath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard',
        '/login'
    ]
}
