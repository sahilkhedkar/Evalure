import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Auth from "./routes/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
