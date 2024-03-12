import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ name: "MN", age: 20, location: "AM" });
}

export async function POST(req, res) {
  let { email, password } = await req.json()
  console.log(email, password);

  if(!email || !password) {
    return NextResponse.json({error: "required field not found"}, {status: 400});  
  }

  return NextResponse.json({ res: 'Credentials verified, User successfully logged in' })
}
