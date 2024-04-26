import React from "react";
import { AuthProvider } from "./components/AuthProvider";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
