"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import GetRequest from "@/service/GetReqest";
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
import UpdateRequest from "@/service/UpdateRequest";
type request = {
    id: string,
    status: string,
    tenantId: string,
    propertieId: string,
    requestDate: string,
    approvedDate: string
};

export default function Reqest() {
    const [request, setRequest] = useState<request[]>([]);
    useEffect(() => {
        const fetchProperty = async () => {
            const res = await GetRequest();
            setRequest(res.data);
        };
        fetchProperty();
    }, []);

    
const handleStatusChange = async ({
  requestId,
  newStatus,
}: {
  requestId: string;
  newStatus: string;
}) => {
  try {
    const result = await UpdateRequest({ requestId, newStatus });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
    
    return (
        <div className="container flex flex-col gap-6 items-center justify-center p-4 mx-auto">
            <Table>
                <TableCaption>A list of your recent requests.</TableCaption>
                <TableHeader>
                    <TableRow className="bg-slate-100">
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Tenant ID</TableHead>
                        <TableHead className="text-center">Property ID</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {request.map((req) => (
                        <TableRow key={req.id}>
                            <TableCell className="font-medium">{req.id}</TableCell>
                            <TableCell><Badge variant={req.status === "APPROVED" ? "default" : req.status === "REJECTED" ? "destructive" : "outline"}>{req.status}</Badge></TableCell>
                            <TableCell>{req.tenantId}</TableCell>
                            <TableCell className="text-right">{req.propertieId}</TableCell>
                            <TableCell className="text-center">
                                <Select defaultValue={req.status} onValueChange={(value) => handleStatusChange({ requestId: req.id, newStatus: value })

                                }>
                                    <SelectTrigger className="w-full max-w-48">
                                        <SelectValue placeholder="Select a status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            <SelectItem value="PENDING">PENDING</SelectItem>
                                            <SelectItem value="REJECTED">REJECTED</SelectItem>
                                            <SelectItem value="APPROVED">APPROVED</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
}