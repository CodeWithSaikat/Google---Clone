import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search.js";
import { StateProvider } from "./components/StateProvider.js";
import reducer, { initialState } from "./reducer/reducer.js";

function App() {
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Routes>
            {/* Home (with search icon) */}
            <Route path="/" element={<Home />} />
            {/* Search Page */}
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
