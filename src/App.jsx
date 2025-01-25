import Helpcenter from "./pages/helpCenter";
import Createticket from "./pages/Createticket";

import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Helpcenter/>} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/create-ticket" element={<Createticket />} />
      </Routes>
    </Router>
  );
}

export default App