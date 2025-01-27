import Helpcenter from "./pages/helpCenter";
import Createticket from "./pages/Createticket";

import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import ITTickets from "./pages/ITTickets";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Helpcenter/>} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/create-ticket" element={<Createticket />} />
        <Route path='/it' element={<ITTickets/>}/>
      </Routes>
    </Router>
  );
}

export default App