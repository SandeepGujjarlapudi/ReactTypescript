import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDetails from "./components/TableDetails";
import FormInput from "./components/FormInput";
// import "./App.css"
// import "./Common.css"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TableDetails />} />
          <Route path="/add-user" element={<FormInput />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

