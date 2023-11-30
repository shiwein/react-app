import Assignment3 from "./lab3/index";
import Assignment4 from "./lab4";
import Assignment5 from "./lab5";
import Nav from "../Nav";
import { Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
  <Provider store={store}>
   <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Assignment3/> }></Route>
          <Route path="lab3" element={<Assignment3/> }></Route>
          <Route path="lab4" element={<Assignment4/> }></Route>
          <Route path="lab5" element={<Assignment5/> }></Route>
        </Routes>
   </div>
   </Provider>
 );
}
export default Labs;