import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { auth } from "./firebase";
import AuthPage from "./views/AuthPage";
import Homepage from "./views/Homepage";
import ShoppingPage from "./views/ShoppingPage";

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
