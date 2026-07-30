import Link from "next/link"
import { Card } from "../ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui//button"
const Navbar = () => {
  return (
    <Card className="flex flex-row max-w-4xl w-full mx-auto items-center justify-between p-4 mt-3">
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
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
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
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
    </Card>
  )
}

export default Navbar
