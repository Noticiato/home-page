import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.tsx";
import "./App.css";
import Home from "./Pages/Home/Home";
import Solution from "./Pages/Solution/Solution.tsx";
import Form from "./Pages/Form/Form.tsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/solucao" element={<Solution />}/>
                    <Route path="/form" element={<Form />}/>
                </Routes>
            </main>
        </Router>
      )
}

export default App