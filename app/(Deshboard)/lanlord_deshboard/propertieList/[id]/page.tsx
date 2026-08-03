"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useEffect, useState } from "react";
import GetCategory from "@/service/GetCategory";
import updateproperty from "../../_action/updateproperty";

 function AddPropertyForm({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const [categories, setCategories] = useState<any[]>([]);
 useEffect(() => {
    const fetchData = async () => {
        const response = await GetCategory();
        console.log("Fetched categories:", response);
        setCategories(response.data); // Ensure response.data is an array

    }
    fetchData();
  }, []);
//   useEffect(() => {
//     const fetchProperty = async () => {
//         const propertyId = (await params).id;
//         const res = await updateproperty();
//     }
//     fetchProperty();
//   }, []);

  return (
    <Card className="w-full max-w-3xl m-auto mt-10">
      <CardHeader>
        <CardTitle>Add New Property</CardTitle>
        <CardDescription>
          Fill in the property information below.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form  className="space-y-5" action={async (formData) => {
            const propertyId = (await params).id;
            const result = await updateproperty(formData, propertyId);
            
        }}>
          <div className="grid gap-2">
            
            <Label htmlFor="title">Property Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Charming Room Near City Center Mall & Metro"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Property description..."
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              type="url"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="price">Price (৳)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="25000"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Mirpur, Dhaka"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="grid gap-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input
                id="bedrooms"
                name="bedrooms"
                type="number"
                placeholder="5"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input
                id="bathrooms"
                name="bathrooms"
                type="number"
                placeholder="2"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="area">Area</Label>
              <Input
                id="area"
                name="area"
                placeholder="1200 sq ft"
                required
              />
            </div>
          </div>
            <Select name="categoriesId" required>
                <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                                {category.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
          <Button type="submit" className="w-full">
            Add Property
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
export default AddPropertyForm;