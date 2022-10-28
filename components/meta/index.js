import Head from "next/head"

export default function Meta({ title = "", description = "" }) {
    return (
        <Head>
            <title>{`Hadi Tabatabaei | ${title}`}</title>
            <meta name="description" content={`Hadi Tabatabaei | ${description}`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}