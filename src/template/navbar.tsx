import styles from '../styles/layout.module.css'
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <h1 className={styles.title}>
                Converte texto
            </h1>

            <div className={styles.navbar}>
                <Link href="/" passHref>Home</Link>
                <Link href="/upperCase" passHref>Maiuscula e Minuscula</Link>                
            </div>
        </div>

    )
}