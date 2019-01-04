import Link from "next/link";

// href가 실제 링크 url인데 as는 그냥 이쁘게 겉으로만 보여주는용 ㅋㅋ, 실제로 as 링크로 들어가면 작동안돼요
export default (props) => 
<Link href={`/movie?id=${props.id}`} as={`/movie/${props.id}`}>
    <a>{props.title}</a>
</Link>