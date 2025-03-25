import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Common.css"

const FormInput: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dob: "",
    aadhar: "",
    pancard: "",
    gender: "",
    address: "",
    phone: "",
    fatherName: "",
    motherName: "",
    education: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    const updatedData = [...savedData, formData];

    localStorage.setItem("userFormData", JSON.stringify(updatedData));

    alert("Form data saved successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      dob: "",
      aadhar: "",
      pancard: "",
      gender: "",
      address: "",
      phone: "",
      fatherName: "",
      motherName: "",
      education: "",
    });

    navigate("/"); 
  };

  return (

    <>
    <div className="card-container">
    <div className="form-container">
      <h2 style={{ textAlign: "center", marginTop: 0 }}>Fill all the details</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" required />

        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" required />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="" required />

        <label>Aadhar Card:</label>
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter Aadhar Card" required />

        <label>PAN Card:</label>
        <input type="text" name="pancard" value={formData.pancard} onChange={handleChange} placeholder=" Enyter Pan Card" required />

        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}  required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required />

        <label>Father's Name:</label>
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter Father's Name" required />

        <label>Mother's Name:</label>
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter Mother's Name" required />

        <label>Education:</label>
        <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Enter Education" required />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default FormInput;
