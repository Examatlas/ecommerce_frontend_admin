import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import AddBook from "./Components/ECommerce/AddBook";
import Books from "./Components/ECommerce/Books";
import OrderReceive from "./Components/ECommerce/OrderReceive";
import EditBook from "./Components/ECommerce/EditBook";


function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ECommerce/addBook" element={<AddBook/>}/>
          <Route path="/book" element={<Books/>}/>
          <Route path="/ECommerce/orderRecieve" element={<OrderReceive/>}/>
          <Route path="/ECommerce/editBook/:id" element={<EditBook/>}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;


