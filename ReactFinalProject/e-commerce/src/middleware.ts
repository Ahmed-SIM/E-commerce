

// middleware page must be behind the app folder
// this function will be excuted in between of any request to ''any page'' and the response of it

import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// ay request by7sal btgabholak ka parameter
export default async function middleware(req:NextRequest) {
    // or we use getToken()
    // we send the req to check if the user authenticated or No
    // getToken() is a function can only be called in middleware and route handler only {places that have the req}
    const jwt = await getToken({req})
 
    // law jwt truthy value yab2a akeed 3ando token
    if(jwt){
        // this function must return NextResponse
        // .next() => will navigate the user to the desired path 
        return NextResponse.next();
}else{

    return NextResponse.redirect(`${process.env.MY_DOMAIN}/login`)
}



}


// 3ashan na7add L pages elly 3lyha L protected path lazem na3mel export default L config
//config includes all pathes I want middleware works at 
export const config ={
matcher:['/cart']
}