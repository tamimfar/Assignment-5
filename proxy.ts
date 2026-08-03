import jwt, { JwtPayload }  from 'jsonwebtoken';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
const AUTH_ROUTES = ['/register','/login']

const PUBLIC_ROUTES = ['/','/properties','/properties/*']
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
const pathname = request.nextUrl.pathname;

const accessToken = request.cookies.get("access_tocken")?.value
// if(!accessToken){
//     return NextResponse.redirect(new URL('/', request.url))
// }
const decode = await  jwt.decode(accessToken!) as JwtPayload
const userRole = decode?.role

if(accessToken && AUTH_ROUTES.includes(pathname) ){
    if(userRole === "TENANT"){
        return NextResponse.redirect(new URL('/deshboard', request.url))
    }else if(userRole === "LANDLORD"){
        return NextResponse.redirect(new URL('/lanlord_deshboard', request.url))
    }else if(userRole === "ADMIN"){
        return NextResponse.redirect(new URL('/admin_deshboard', request.url))
    }else{
       return NextResponse.redirect(new URL('/not-fount', request.url)) 
    }

}
const isAUTH = AUTH_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"))

const isPUBLIC = PUBLIC_ROUTES.some((rout) => pathname === rout ||pathname.startsWith(rout + "/") )
if(!accessToken && !isAUTH && !isPUBLIC){
    return NextResponse.redirect(new URL('/login', request.url));
}

 if(pathname.startsWith("/deshboard") && userRole !== "TENANT"){
        return NextResponse.redirect(new URL('/not-found', request.url));
    }else if(pathname.startsWith("/admin_deshboard") && userRole !== "ADMIN"){
        return NextResponse.redirect(new URL('/not-found', request.url));
    }else if(pathname.startsWith("/lanlord_deshboard") && userRole !== "LANDLORD"){
        return NextResponse.redirect(new URL('/not-found', request.url));
    }
    return NextResponse.next()
}
 
export const config = {
  matcher: '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)'
}