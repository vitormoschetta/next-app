import Layout from '../template/layout'
import Head from "next/head";

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Converte Texto</title>
                <meta name="description"
                    content="Um site que facilita conversões diversas de textos"></meta>
            </Head>
            <Layout>
                <div>
                    Home
                </div>
            </Layout>
        </>
    )
}