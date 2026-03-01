import connection from "@/lib/mongodb";
import user from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: number }> }
) {
    try {
        await connection();
        
        const { id } = await params;
        
        const User = await user.findById(id)
        
        return NextResponse.json(User);
    }
    catch (err) {
        return NextResponse.json(err)
    }
}