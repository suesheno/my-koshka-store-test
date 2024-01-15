

export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
                <main>
                    { children }
                </main>
            </div>
        </div>
    )
}