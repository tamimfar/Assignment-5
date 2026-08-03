"user client"
import Sidebar from "@/components/custome/Sidebar";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_tocken")?.value;
    console.log(token)
    let role = "";

    if (token) {
        const decoded = jwt.decode(token) as JwtPayload;

        console.log(decoded.role)
        role = decoded.role || "";
    }

    return (
        <>
            <div className=" flex w-fll">
                <div className=" w-[300px]">

                    <Sidebar role={role} />
                </div>
                <div className=" w-full p-4">

                    {children}
                </div>
            </div>
        </>
    );
}