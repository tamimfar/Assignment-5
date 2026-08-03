"use client";

import { Skeleton } from "@/components/ui/skeleton";
import GetRentaleRequest from "@/service/GetRentaleRequest";
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
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
type RentalRequest = {
  success: boolean;
  status: number;
  message: string;
  data: {
    id: string;
    status: string;
    tenantId: string;
    propertieId: string;
    requestDate: string;
    approvedDate: string | null;
  }[];
};


export default function Tenant() {
    const [rentalRequest, setRentalRequest] = useState<RentalRequest | null>(null);
    useEffect(() => {
        const fetchRentalRequest = async () => {
            const res = await GetRentaleRequest();
            console.log(res);
            setRentalRequest(res);
        };
        fetchRentalRequest();
    }, []);
    console.log(rentalRequest);
    return (
        <div>
            <Table className="container mx-auto mt-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Request ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Tenant ID</TableHead>
                        <TableHead>Property ID</TableHead>
                        <TableHead>Request Date</TableHead>
                        <TableHead>Approved Date</TableHead>
                        <TableHead>Payment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rentalRequest ? (
                        rentalRequest.data?.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell>{request.id}</TableCell>
                                <TableCell>{request.status === "APPROVED" ? <Badge variant="default">Approved</Badge> : request.status === "REJECTED" ? <Badge variant="destructive">Rejected</Badge> : <Badge variant="outline">Pending</Badge>}</TableCell>
                                <TableCell>{request.tenantId}</TableCell>
                                <TableCell>{request.propertieId}</TableCell>
                                <TableCell>{request.requestDate}</TableCell>
                                <TableCell>{request.approvedDate}</TableCell>
                                <TableCell><Link href={`/deshboard/tenant/${request.id}`}><Button>View Details</Button></Link></TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="h-24 text-center">
                                No rental requests found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}