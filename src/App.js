import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./views/Homepage";
import ShoppingPage from "./views/ShoppingPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
