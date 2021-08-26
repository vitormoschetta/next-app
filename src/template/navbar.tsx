import styles from '../styles/layout.module.css'
import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <div className={styles.navbar}>
                <Link href="/" passHref>Home</Link>
                <Link href="/converter" passHref>Converter</Link>
                <Link href="/products" passHref>Products</Link>
            </div>
        </div>

    )
}