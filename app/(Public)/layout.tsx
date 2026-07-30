
import Navbar from "@/components/custome/Navbar";
import { GetProfile } from "@/service/GetProfile";


export default async function Layout({ children }: { children: React.ReactNode }) {

    const user = await GetProfile();

    return (

        <section>
            <Navbar user={user} />
            {children}
        </section>
    );
}