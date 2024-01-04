import { Routes, Route } from "react-router-dom";
import { Home, Store, About, Navbar } from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
