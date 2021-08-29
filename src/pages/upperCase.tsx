import UpperCaseComponent from "../components/upperCaseComponent"
import Layout from '../template/layout'
import Head from "next/head";

export default function upperCase() {
    return (
        <>
            <Head>
                <title>Converte texto maiusculo em minusculo, minúsculo em maiúsculo</title>
                <meta name="description"
                    content="Converta seus textos de maíusculo para minúsculo ou de minúsculo para maiúsculo rapidamente."></meta>
            </Head>
            <Layout>
                <UpperCaseComponent></UpperCaseComponent>
            </Layout>
        </>

    )
}