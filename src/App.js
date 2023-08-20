import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./components/PageContainer";
import "../src/index.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products/:id" element={<Detail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
