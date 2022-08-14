import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./widgets/NavBar";
import About from "./views/About";
import Note from "./views/Note";
import Spacer from "./widgets/Spacer";

function App() {
    return (
        <BrowserRouter>
            <div className="App Column Content">
                <NavBar />
                <Spacer height={20} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/note/:id" element={<Note />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
