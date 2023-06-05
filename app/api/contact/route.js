
import connection from "@/database/database"
import Post_Model from "@/model/Post"
import User_Model from "@/model/User"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        //fetch data from database
        await connection(process.env.MONGO_URL)
        // const users = await User_Model.find()
        const users = await User_Model.find()
        console.log(users)
        return new NextResponse(users, { status: 200 })
    } catch (error) {
        return new NextResponse("Data Not Found...", { status: 500 })
    }

}