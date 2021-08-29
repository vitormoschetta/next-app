import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <h1 className="me-5">Converte Texto</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <Link href="/" passHref>Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link href="/upperCase" passHref>Maiuscula e Minuscula</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}