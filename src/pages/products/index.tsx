import Layout from '../../template/layout'
import { useRouter } from 'next/router'
import Product from '../../core/models/product'

export default function ProductPage(props) {

    const products = [
        new Product('Product A', 5.99),
        new Product('Product B', 10.50),
        new Product('Product C', 250.00)
    ]


    const router = useRouter()

    function CreateProduct() {
        router.push('/products/create')
    }

    function renderizarDados() {
        return products?.map((product, i) => {
            return (
                <tr>
                    <td className="text-left p-4">{product.id}</td>
                    <td className="text-left p-4">{product.name}</td>
                    <td className="text-left p-4">{product.price}</td>
                </tr>
            )
        })
    }

    return (
        <Layout>
            <button onClick={CreateProduct} className="">Novo</button>
            <table className="w-full rounded-xl overflow-hidden">
                <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
                    <tr>
                        <th className="">Id</th>
                        <th className="">Nome</th>
                        <th className="">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarDados()}
                </tbody>
            </table>
        </Layout>
    )
}