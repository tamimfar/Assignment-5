"use client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import updateuser from "@/app/(Deshboard)/lanlord_deshboard/_action/updateuser"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation";

const updateuserstate = ({
    params
}: {
    params: Promise<{ id: string }>;
}) => {
    const router = useRouter();
    return (
        <div className=" flex justify-center items-center h-screen">

        <Card className=" w-[300px]">
            <form action={async (formData) => {
            const propertyId = (await params).id;
            const result = await updateuser(formData, propertyId);
            if(result)
            {
                router.push("/admin_deshboard/alluser")
            }
            
        }} >
        <div className="p-4">
            <Select   name="status">
                <SelectTrigger className="w-full ">
                    <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                        <SelectItem value="BAN">BAN</SelectItem>
                       
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className="p-2">

            <Button  className="w-full">update user</Button>
        </div>
            </form>
        </Card>
        </div>
    )
}

export default updateuserstate
