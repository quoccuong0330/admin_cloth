import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import About from "./Pages/About";
import Header from "./components/Header";
import Update from "./Pages/Update";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/add" Component={Edit} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/update" Component={Update} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
