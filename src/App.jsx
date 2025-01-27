import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Helpcenter from "./pages/helpCenter";
import Createticket from "./pages/Createticket";

import ITTickets from "./pages/ITTickets";
import ITTicketSubmit from "./pages/ITTicketSubmit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Helpcenter />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/create-ticket" element={<Createticket />} />
        <Route path="/it" element={<ITTickets />} />
        <Route path="/submission" element={<ITTicketSubmit />} />
      </Routes>
    </Router>
  );
};

export default App;
