
import connection from "@/database/database"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        //fetch data from database
        await connection()
        
    } catch (error) {
        return new NextResponse("Data Not...", { status: 500 })
    }

}