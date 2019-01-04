import Head from "next/head";
import PostLink from "../components/MovieLink";
import Axios from "axios";

export default class extends React.Component {
    static async getInitialProps() {
        // 인터넷에 돌아다니는 무비리스트 api 호출
        // backend에서 실행된다.
        const { data: { data: { movies } } }= await Axios.get("https://yts.am/api/v2/list_movies.json");
        console.log(movies);
        return {
            movies: "asdasd"
        }
    }

    render() {
        // backend 와 frontend에 같이 찍히는 로그
        console.log(this.props.movies);
        return (
            <div>
                <Head>
                    <title>Home</title>
                </Head>
                <h1>Movies:</h1>
                <ul>
                    <li>
                        <PostLink title={"Something"} id={0}></PostLink>
                    </li>
                    <li>
                        <PostLink title={"Another thing"} id={1}></PostLink>
                    </li>
                </ul>
            </div>
        );
    }
}
