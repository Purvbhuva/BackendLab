import pool from "@/lib/mysql";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const [row] = await pool.query("Select * from users");
        
        return NextResponse.json(row)
    }
    catch (err) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }
}

