"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { registerAction } from "../_actions/registerAction"

export function RegisterPage() {
  const [password, setPassword] = useState(false)
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register to your account</CardTitle>
        <CardDescription>
          Enter your name email password below to register to your account
        </CardDescription>
        <CardAction>
          <Button variant="link"><Link href='/login'>Login</Link></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form action={registerAction}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your @username"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>

              </div>
              <Input id="password" type={password ? "text" : "password"} name="password" placeholder="*******" required />
              <div className="flex gap-2 py-2 ml-2">
                <Checkbox checked={password} onCheckedChange={(checked) => setPassword(!!checked)} />
                <span>{password ? "Show" : "Hide"}</span>
              </div>
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-full my-3">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="TETAD">TETAD</SelectItem>
                <SelectItem value="LANDLORD">LANDLORD</SelectItem>
               
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className=" flex flex-col gap-2">

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
        </form>
      </CardContent>

    </Card>
  )
}
