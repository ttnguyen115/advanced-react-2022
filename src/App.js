import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import { checkUserSession } from "./store/actions/userAction/actions";

const Homepage = React.lazy(() => import("./views/Homepage"));
const AuthPage = React.lazy(() => import("./views/AuthPage"));
const CheckoutPage = React.lazy(() => import("./views/CheckoutPage"));
const ShoppingPage = React.lazy(() => import("./views/ShoppingPage"));

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
      <ErrorBoundary>
        <React.Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path="/auth"
              element={currentUser ? <Navigate to="/" /> : <AuthPage />}
            />
            <Route path="/shop/*" element={<ShoppingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
