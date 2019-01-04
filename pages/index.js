import Head from "next/head";
import withLayout from "../lib/withLayout";

const Index = () => (
<div>
    <Head>
        <title>Home</title>
    </Head>
    <h1>
        Hello from index
    </h1>
</div>
);


export default withLayout(Index);