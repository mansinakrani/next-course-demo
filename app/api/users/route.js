import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ name: "MN", age: 20, location: "AM" });
}

export async function POST(req, res) {
  let { name, age, email } = await req.json()
  console.log(name, age, email);

  if(!name || !age || !email) {
    return NextResponse.json({error: "required field not found", ok: false}, {status: 400});  
  }

  return NextResponse.json({ res: 'Credentials verified, User successfully logged in', ok:true }, {status: 201})
}
