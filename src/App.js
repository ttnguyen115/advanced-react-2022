import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import ShoppingPage from "./views/ShoppingPage";

function App() {
  return (
    <Routes>
      <Route path="/shop" element={<ShoppingPage />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
