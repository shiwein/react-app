import Nav from "../Nav";
import Assignment3 from "./lab3";
import Assignment4 from "./lab4";
import { Routes, Route, Navigate } from "react-router";
import store from "./store";
import { Provider } from "react-redux";

function labs() {
    return (
        <Provider store={store}>
            <div className="container">
                <Nav />
                <Routes>
                    <Route path="/" element={<Navigate to="la3" />} />
                    <Route path="lab3" element={<Assignment3 />} />
                    <Route path="lab4" element={<Assignment4 />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default labs;