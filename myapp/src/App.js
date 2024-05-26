import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import RandomUser from "./RandomUser";
import { useState } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const User = () => {
  const { component } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(`/${component === "randomuser" ? "counter" : "randomuser"}`);
        }}
      >
        {component === "randomuser" ? "Show Counter" : "Show RandomUser"}
      </button>
      {component === "randomuser" && <RandomUser />}
      {component === "counter" && <Counter />}
    </div>
  );
};

const App = () => {
  const [showUser, setShowUser] = useState(true);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/:component" element={<User />} />
        </Routes>
      </Router>
    </div>
  );

  return (
    <div>
      {/* <Counter /> */}
      <button onClick={() => setShowUser(!showUser)}>
        {showUser ? "Hide" : "Show"} User
      </button>
      {showUser && <RandomUser />}
    </div>
  );
};

export default App;
