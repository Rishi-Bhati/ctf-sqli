import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { username, pass1, pass2 } = await req.json();
    const password = pass1 + pass2;

    console.log(`Login attempt with username: ${username} and password: ${password}`);
    const users = await prisma.$queryRawUnsafe(`SELECT * FROM "User" WHERE username = '${username}' AND password = '${password}'`);
    console.log("User from DB:", JSON.stringify(users));

    if (Array.isArray(users) && users.length > 0) {
      const user = users[0];
      if (user.role === "ADMIN") {
        return NextResponse.json({ redirect: "/admin" });
      } else {
        return NextResponse.json({ redirect: "/user" });
      }
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
