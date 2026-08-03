"use client";

import GetAllProperties from "@/service/GetAllPropertylist";
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
import deleteproperty from "../_action/deleteproperty";
type Property = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: string;
    avilable: boolean;
    createdAt: string;
    landlordId: string;
    categoriesId: string;
    
};

const PropertyList = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    useEffect(() => {
        const fetchProperties = async () => {
            const data = await GetAllProperties();
            setProperties(data.data);
        }
        fetchProperties();
    }, []);
  return (
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Bedrooms</TableHead>
                    <TableHead>Bathrooms</TableHead>
                    <TableHead>Area</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {properties.map((property) => (
                    <TableRow key={property.id}>
                        <TableCell>{property.title}</TableCell>
                        <TableCell>{property.description}</TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell>${property.price.toFixed(2)}</TableCell>
                        <TableCell>{property.bedrooms}</TableCell>
                        <TableCell>{property.bathrooms}</TableCell>
                        <TableCell>{property.area}</TableCell>
                        <TableCell>{property.avilable ? "Yes" : "No"}</TableCell>
                        <TableCell>
                            <Button variant="default" size="sm">
                                <Link href={`/lanlord_deshboard/propertieList/${property.id}`}>
                                    Edit
                                </Link>
                            </Button>
                            <Button variant="destructive" size="sm" onClick={async () => {
                               await deleteproperty(property.id)
                            }}>
                                
                                    Delete
                               
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default PropertyList
