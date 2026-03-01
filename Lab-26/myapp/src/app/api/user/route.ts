import connection from "@/lib/mongodb";
import User from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connection();
        
        const user = await User.find()
        console.log(user);

        return NextResponse.json(user)
    }
    catch (err) {
        return NextResponse.json(err);   
    }
}