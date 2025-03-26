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
import TablePagination from "@mui/material/TablePagination";  
import { IoIosSearch } from "react-icons/io";
import { InputAdornment } from "@mui/material";
import "./Table.css";

const TableDetails: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);  
  const [rowsPerPage] = useState(6);  
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    setUsers(savedData);
  }, []);


  const filteredUsers = Array.isArray(users)
    ? users.filter((user) =>
        Object.values(user || {}) 
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : [];

  const paginatedUsers = filteredUsers.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <>
    
      <div className="container">
      <div className="header">
          <h1>INDIAN CITIZEN DETAILS</h1>
        </div>
        <div>
          <div 
            className="top-container" 
            style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", marginBottom: "10px", fontFamily:"poppins" }}
          >
            <TextField
            className="searchbar"
              variant="outlined"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoIosSearch />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" onClick={() => navigate("/add-user")}>
              Add New User
            </Button>
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="user table">
            <TableHead>
              <TableRow className="header-table" sx={{ color: "green" }}>
                <TableCell>FIRST NAME</TableCell>
                <TableCell>LAST NAME</TableCell>
                <TableCell>AGE</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>AADHAR</TableCell>
                <TableCell>PANCARD</TableCell>
                <TableCell>GENDER</TableCell>
                <TableCell>ADDRESS</TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell>FATHER NAME</TableCell>
                <TableCell>MOTHER NAME</TableCell>
                <TableCell>EDUCATION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user, index) => (
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

        
        <TablePagination
          component="div"
          count={filteredUsers.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(_event, newPage) => setPage(newPage)}
          rowsPerPageOptions={[]} 
        />
      </div>
    </>
  );
};

export default TableDetails;
