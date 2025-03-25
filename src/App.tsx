// import './App.css'
// import TableDetails from './components/TableDetails'

// function App() {
  

//   return (
//     <>
//     <div>
//       <h1> Indian Citizen Details </h1>
//       <TableDetails/>
//     </div>
    
//     </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableDetails from "./components/TableDetails";
import FormInput from "./components/FormInput";
// import "./App.css"
// import "./Common.css"

function App() {
  return (
    <Router>
      
      {/* <h1 style={{ textAlign: "center", marginTop: 0 }}>Indian Citizen Details</h1> */}
      
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

