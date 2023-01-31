import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { Homepage } from "./pages/Homepage";
import './styles/globalStyles.css'
import './styles/reset.css'
import '../src/App.css'

export const App = () => {
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      {
      login ? <Dashboard /> : <Homepage setLogin={setLogin} />
      }
    </div>
  );
}

