import React from "react";
import Header from "../components/Header";

// 이 함수는 "pages/_app.js"에서 대체될 수 있다.
const withLayout = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <Header />
                    <Component />
                </div>
            );
        }
    };
};

export default withLayout;