import { Route, Routes } from "react-router";
import Navigation from "./Pages/Navigation";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Navigation />} />
    </Routes>
  );
}

export default App;
