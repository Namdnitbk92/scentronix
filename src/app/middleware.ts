import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);

  console.log(
    "Headers:",
    JSON.stringify(Object.fromEntries(request.headers.entries()), null, 2)
  );

  // Log the IP address
  const ip = request.headers.get("x-forwarded-for") || request.ip;
  console.log("IP Address:", ip);

  // Continue processing the request
  return NextResponse.next();
}
