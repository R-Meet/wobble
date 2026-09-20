import { handleApiError } from "@/lib/error-handlers";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { UserAccount } from "@/modules/users/models/user.model";
import { connectDB } from "@/lib/connect-db";

export const POST = async (req: Request) => {

  try {
    
    const body = await req.json();

    const { username, password, confirmPassword } = body;

    if ( !username || !password || !confirmPassword ) {
      return NextResponse.json(
        { message: 'Username, Password, and Confirm Password are required', success: false },
        { status: 400 }
      )
    }

    if ( password !== confirmPassword ) {
      return NextResponse.json(
        { message: 'Passwords do not match', success: false },
        { status: 400 }
      )
    }

    await connectDB();

    const isUserExists = await UserAccount.findOne({
      username
    });

    if (isUserExists) {
      return NextResponse.json(
        { message: 'Username already taken', success: false },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUserAccount = new UserAccount({
      username,
      password: hashedPassword
    });

    await newUserAccount.save();

    return NextResponse.json(
      { message: 'User created successfully', success: true },
      { status: 201 }
    )

  } catch (err) {
    return handleApiError(err);
  }

};
