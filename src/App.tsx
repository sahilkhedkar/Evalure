import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Auth from "./routes/Auth";
import { usePuterStore } from "./lib/puter";
import { useEffect } from "react";

function App() {
  const { init } = usePuterStore();

  useEffect(() => {
    init();
  }, [init]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
