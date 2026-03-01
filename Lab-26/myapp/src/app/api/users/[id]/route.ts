import pool from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest, 
    { params }: { params: Promise<{ id: number }> }
) {
    try {
        const { id } = await params;
        
        const [rows] = await pool.query(`Select * from users where id=${id}`);
        
        return NextResponse.json({ rows });
    }
    catch (err) {
        return NextResponse.json(
            { message: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}