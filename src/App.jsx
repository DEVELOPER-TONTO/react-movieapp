
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/hello" element={<h1>hello</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
     </Routes>
    </Router>
  );
}
export default App;
