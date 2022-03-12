import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { checkUserSession } from "./store/actions/userAction/actions";
import AuthPage from "./views/AuthPage";
import CheckoutPage from "./views/CheckoutPage";
import Homepage from "./views/Homepage";
import ShoppingPage from "./views/ShoppingPage";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { currentUser } = state.user;

  React.useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="/" /> : <AuthPage />}
        />
        <Route path="/shop/*" element={<ShoppingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
