import Layout from '../../template/layout'
import Link from "next/link";
import styles from '../../styles/product.module.css'

export default function ProductPage() {
    return (
        <Layout>
            Product Create Page       
            <input type="text"/>     

            <div className={styles.submenu}>               
                <Link href="/products" passHref><button>Voltar</button></Link>
            </div>
        </Layout>
    )
}