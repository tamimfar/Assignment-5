export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="h-screen max-w-sm w-md mx-auto flex  items-center">
            {children}
        </section>
    );
}