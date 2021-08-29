import Navbar from './navbar'

export default function Layout(params) {
    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <Navbar></Navbar>
                <div className="container">
                    {params.children}
                </div>
            </main>
        </div>
    )
}