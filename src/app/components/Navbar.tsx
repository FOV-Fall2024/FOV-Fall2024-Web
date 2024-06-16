import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  return <header className="w-full">#Navbar</header>;
}
