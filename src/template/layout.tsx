import styles from '../styles/layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout(params) {
    return (

        <div className={styles.container}>
            <Navbar />

            <main className={styles.main}>
                {params.children}
            </main>

            <Footer />   
        </div>
    )
}