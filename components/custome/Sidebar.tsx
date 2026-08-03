"use client";

import Link from "next/link";
import { Home, User } from "lucide-react";

type Props = {
  role: string;
};

export default function Sidebar({ role }: Props) {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">
      <nav className="space-y-2 p-4">
        <Link href="/" className="flex items-center gap-2 p-2">
          <Home />
          Home
        </Link>

        {role === "ADMIN" && (
          <Link
            href="/admin_deshboard/alluser"
            className="flex items-center gap-2 p-2"
          >
            <User />
            All Users
          </Link>
        )}

        {role === "LANDLORD" && (
            <div>
                
          <Link href="/lanlord_deshboard/propertieList" className="p-2 block">
            My Properties
          </Link>
          <Link href="/lanlord_deshboard/createproperty" className="p-2 block">
            Create Properties
          </Link>
          <Link href="/lanlord_deshboard/requests" className="p-2 block">
            All Request
          </Link>
            </div>
        )}

        {role === "TENANT" && (
          <Link href="deshboard/tenant" className="p-2 block">
            My Bookings
          </Link>
        )}
      </nav>
    </div>
  );
}