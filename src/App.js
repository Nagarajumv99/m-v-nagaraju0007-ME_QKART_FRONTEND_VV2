import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";

// Support environment variables for production (Vercel/Docker)
// Fall back to ipConfig for local development
const backendUrl = process.env.REACT_APP_BACKEND_URL || `http://${ipConfig.workspaceIp}:8082/api/v1`;

export const config = {
  endpoint: backendUrl,
};

function App() {
  return (
    <div className="App">
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/thanks" component={Thanks} />
    <Route path="/" component={Products} />
  </Switch>
</div>
  );
}


export default App;
