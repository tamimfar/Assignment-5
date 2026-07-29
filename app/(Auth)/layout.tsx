export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="h-screen max-w-sm w-md mx-auto flex flex-col justify-center  items-center">

            {children}
        </section>
    );
}