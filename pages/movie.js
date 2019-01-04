import Head from "next/head";
import { withRouter } from "next/router";

const movie = props => 
<div>
    <Head>
        <title>{props.router.query.title}</title>
    </Head>
    <h1>{props.title}</h1>
    <p>lalalalala</p>
</div>

movie.getInitialProps = async () => {
    // API 호출하기 좋은 위치.
    // movie가 렌더되기 전에 호출됨.
    return { title: "가로챈 제목" };
}

export default withRouter(movie);