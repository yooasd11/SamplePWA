import Document, { Head, Main, NextScript } from "next/document";

// 여기다가 server side 렌더링할 스태틱한 내용들을 추가할 수 있다.
export default class MyDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta name="Jaeyoon" content={"A Content"}></meta>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </html>
        )
    }
}