"use client"
import Link from "next/link"
import { Card } from "../ui/card"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {

  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { logout } from "@/service/logout"
import { redirect } from "next/navigation"
const Navbar = ({ user }: { user: any }) => {

  const handleUserMenuAction = async (action: string) => {
    console.log("User menu action:", action)
    if (action === "logout") {
      // Perform logout action here
      const res = await logout();
      if (res.success) {
        redirect("/login")
      }
    }
  }
  return (
    <Card className="flex flex-row max-w-4xl w-full mx-auto items-center justify-between p-4 mt-3 bg-[#6957E9]">
      {/* Logo Section */}
      <div>
        <Link href="#">
          <h1 className="text-xl font-bold">NextJS</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6 font-medium">
        <li>
          <Link href="#" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-primary transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-primary transition-colors">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </li>
      </ul>

      {/* User Profile / Dropdown */}
      <div>
        {user.success ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full"><Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-50">
              <DropdownMenuGroup>
                <div>
                  <div className="flex flex-col space-y-1 leading-none p-3">
                    <h4 className="font-medium leading-none">{user.data?.user.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {user.data?.user.email}
                    </p>
                  </div>

                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CreditCardIcon />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BellIcon />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {
                console.log("Logout")
                handleUserMenuAction("logout")
              }}>
                <LogOutIcon />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/login">
            <Button variant="ghost" className="rounded-full">Login</Button>
          </Link>
        )
        }

      </div>
    </Card>
  )
}

export default Navbar
