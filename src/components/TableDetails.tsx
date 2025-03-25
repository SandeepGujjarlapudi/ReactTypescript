import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./Table.css"




const TableDetails: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    setUsers(savedData);
  }, []);

  return (
    <>
    <div> <h1 style={{ textAlign: "center", marginTop: 0 }}> Indian Citizen Details </h1></div>
    <div>
      <div className="button-container">
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/add-user")}
      >
        Add New User
      </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Aadhar</TableCell>
              <TableCell>Pancard</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Mother Name</TableCell>
              <TableCell>Education</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.dob}</TableCell>
                <TableCell>{user.aadhar}</TableCell>
                <TableCell>{user.pancard}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.fatherName}</TableCell>
                <TableCell>{user.motherName}</TableCell>
                <TableCell>{user.education}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
};

export default TableDetails;







// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const TableDetails: React.FC = () => {
//   const [users, setUsers] = useState<any[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
//     setUsers(savedData);
//   }, []);

//   return (
//     <div>
    
//       <button onClick={() => navigate("/add-user")}>Add New User</button>
      
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>DOB</th>
//             <th>Aadhar</th>
//             <th>Pancard</th>
//             <th>Gender</th>
//             <th>Address</th>
//             <th>Phone</th>
//             <th>father Name</th>
//             <th>Mother Name</th>
//             <th>Education</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.age}</td>
//               <td>{user.dob}</td>
//               <td>{user.aadhar}</td>
//               <td>{user.pancard}</td>
//               <td>{user.gender}</td>
//               <td>{user.address}</td>
//               <td>{user.phone}</td>
//               <td>{user.fatherName}</td>
//               <td>{user.motherName}</td>
//               <td>{user.education}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableDetails;

