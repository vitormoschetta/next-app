import Layout from '../../template/layout'
import styles from '../../styles/product.module.css'
import { useRouter } from 'next/router'

export default function ProductPage() {

    const router = useRouter()

    function Return() {
        router.push('/products')
    }


    return (
        <Layout>
            Product Create Page
            <input type="text" />

            <div className={styles.submenu}>
                <button onClick={Return} className="">Voltar</button>
            </div>
        </Layout>
    )
}