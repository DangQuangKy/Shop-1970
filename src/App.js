import AuthProvider from "react-auth-kit/AuthProvider";
import createStore from "react-auth-kit/createStore";
import PublicRoute from "./Routes/publicRoute";

function App() {
  const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "http:",
  });
  return (
    <AuthProvider store={store}>
      <PublicRoute />
    </AuthProvider>
  );
}

export default App;
