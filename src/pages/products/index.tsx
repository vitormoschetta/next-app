import Layout from '../../template/layout'
import Link from "next/link";
import styles from '../../styles/product.module.css'

export default function ProductPage() {
    return (
        <Layout>           
            <div className={styles.submenu}>               
                <Link href="/products/create" passHref><button>Add</button></Link>
            </div>
        </Layout>
    )
}