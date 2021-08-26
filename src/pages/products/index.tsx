import Layout from '../../template/layout'
import { useRouter } from 'next/router'

export default function ProductPage(props) {

    const router = useRouter()

    function CreateProduct() {
        router.push('/products/create')        
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
                    <tr>
                        <td className="">{props.id}</td>
                        <td className="">{props.name}</td>
                        <td className="">{props.price}</td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
}