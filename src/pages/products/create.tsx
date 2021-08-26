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
            Cadastrar Produto

            <div>
                <label>Nome:</label>
                <input type="text" name="txtName" />
            </div>

            <div>
                <label>Preço:</label>
                <input type="text" name="txtPrice" />
            </div>
            
            <div className="">
                <button className="">Cadastrar</button>
                <button onClick={Return} className="">Voltar</button>
            </div>        
        </Layout>
    )
}