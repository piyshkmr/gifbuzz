import "./main.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Categories from "./pages/Categories";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:tag" element={<SearchResults />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <BottomBar />
    </div>
  );
}

export default App;
