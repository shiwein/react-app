import { useSelector, useDispatch } from "react-redux";

function HelloRedux() {
    const { message } = useSelector((state) => state.helloRedux);
    return (
        <div>
            <h1>Hello World</h1>
            <h2>{message}</h2>
        </div>
    );
};

export default HelloRedux;