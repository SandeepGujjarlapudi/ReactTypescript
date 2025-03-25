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
import TextField from "@mui/material/TextField";
import "./Table.css";
import { IoIosSearch } from "react-icons/io";
import { IconButton } from "@mui/material";

const TableDetails: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    setUsers(savedData);
  }, []);

  // Filter users based on search query
  const filteredUsers = Array.isArray(users)
  ? users.filter((user) =>
      Object.values(user || {}) // Ensure user is an object
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
  : [];
  // const filteredUsers = users.filter((user) =>
  //   Object.values(user)
  //     .join(" ")
  //     .toLowerCase()
  //     .includes(searchQuery.toLowerCase())
  // ); 

  return (
    <>
    <div className="container">
      <div className="header">
        <h1>Indian Citizen Details</h1>
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={() => navigate("/add-user")}>
          Add New User
        </Button>
      </div>
      <div className="search-container" style={{ marginBottom: "10px", textAlign: "center" }}>
        <TextField
          label="Search Users..."
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        
      </div >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow className="header-table" sx={{ color: "green" }}>
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
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={12} align="center">
                  No matching records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  );
};

export default TableDetails;
