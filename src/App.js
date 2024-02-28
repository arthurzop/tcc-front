import "./App.css";
import LandingPage from "./pages/landing-page/landing-page";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
