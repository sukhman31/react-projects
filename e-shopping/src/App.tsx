import { Routes, Route } from "react-router-dom";
import { Home, Store, About } from "./components/index";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/store' element={<Store />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  );
}

export default App;
