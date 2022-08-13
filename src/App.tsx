import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./widgets/NavBar";
import About from "./views/About";
import Note from "./views/Note";

function App() {
    const user = useSelector((state: RootState) => state.user);

    return (
        <BrowserRouter>
            <div className="App Column">
                <NavBar />
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
