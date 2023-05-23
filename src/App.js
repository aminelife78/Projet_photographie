import "./App.css";
import { Routes, Route } from "react-router-dom";


import Scroll from "./components/Scroll/Scroll";
import Eroor from "./components/Eroor/Eroor";

import AuthVerify from "./components/Admin/halper/AuthVerify";
import RouteAdmin from "./components/Admin/RouteAdmin";
import RoutePublic from "./components/RoutePublic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<RoutePublic />} />

        <Route
          path="/admin/*"
          element={
            <AuthVerify>
              <RouteAdmin />
            </AuthVerify>
          }
        />
        <Route path="*" element={<Eroor />} />
      </Routes>
      <Scroll />
     
    </div>
  );
}

export default App;
