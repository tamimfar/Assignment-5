"use client";

import { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import GetAllUsers from "@/service/GetAllUsers";



export default function Alluser() {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        const fetchProperties = async () => {
            const data = await GetAllUsers();
            setUsers(data.data);
        }
        fetchProperties();
    }, []);
  return (
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>name</TableHead>
                    <TableHead>email</TableHead>
                    <TableHead>role</TableHead>
                    <TableHead>status</TableHead>
                    <TableHead>action</TableHead>
                   
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((property) => (
                    <TableRow key={property.id}>
                        <TableCell>{property.name}</TableCell>
                        <TableCell>{property.email}</TableCell>
                        <TableCell>{property.role}</TableCell>
                        <TableCell>{property.status}</TableCell>
                       
                        <TableCell>
                            <Button variant="default" size="sm">
                                <Link href={`/admin_deshboard/alluser/${property.id}`}>
                                    Edit
                                </Link>
                            </Button>
                            
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}
