import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormInput.css";

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

  const [errors, setErrors] = useState({
    phone: "",
    aadhar: "",
    pancard: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    address: "",
  });

  const calculateAge = (dob: string) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    let updatedValue = value;
    let errorMsg = "";

    
    if (name === "dob") {
      updatedValue = value;
      const calculatedAge = calculateAge(value);
      setFormData((prevData) => ({
        ...prevData,
        dob: value,
        age: calculatedAge, 
      }));
      return;
    }

   
    if (name === "pancard" ) {
      updatedValue = value.toUpperCase();
    }

  
    if (["firstName", "lastName", "fatherName", "motherName"].includes(name)) {
      const namePattern = /^[A-Za-z\s]+$/; // 
      if (!namePattern.test(updatedValue)) {
        errorMsg = "Only letters are allowed.";
      }
    }

    
  
    if (name === "phone") {
      const phonePattern = /^[6789]\d{9}$/; 
      errorMsg = phonePattern.test(updatedValue) ? "" : "Invalid phone number! ";
    }
    

   
    if (name === "aadhar") {
      const aadharPattern = /^\d{12}$/;
      errorMsg = aadharPattern.test(updatedValue) ? "" : "Invalid Aadhar! Must be 12 digits.";
    }

    
    if (name === "pancard") {
      const pancardPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      errorMsg = pancardPattern.test(updatedValue) ? "" : "Invalid PAN! Format: AAAAA1234A";
    }

 
    if (name === "address") {
      errorMsg = updatedValue.length >= 5 ? "" : "Must be at least 5 characters.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    
    if (Object.values(errors).some((err) => err !== "")) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    
    const savedData = JSON.parse(localStorage.getItem("userFormData") || "[]");
    // const updatedData = [...savedData, formData];
    const updatedData = Array.isArray(savedData) ? [formData,...savedData ] : [formData];

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
      <div className="card-container">
        <div className="form-container">
          <h2 style={{ textAlign: "center", marginTop: 0 , fontSize:"xx-medium"}}>FILL ALL THE DETAILS</h2>
          <form onSubmit={handleSubmit}>

            <div className="name">

              <div className="name-container">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" required />
            {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
            </div>

            <div className="name-container">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" required />
            {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
            </div>

            </div>

            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" disabled required />

            <label>Date of Birth:</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

            <label>Aadhar Card:</label>
            <input type="number" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter Aadhar Card" maxLength={12} required />
            {errors.aadhar && <p style={{ color: "red" }}>{errors.aadhar}</p>}

            <label>PAN Card:</label>
            <input type="text" name="pancard" value={formData.pancard} onChange={handleChange} placeholder="Enter PAN Card" maxLength={10} required />
            {errors.pancard && <p style={{ color: "red" }}>{errors.pancard}</p>}

            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" required />
            {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}

           
            <label>Phone Number:</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Enter 10-digit Phone Number" 
                    maxLength={10} 
                    required 
                  />
                  {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}


            <label>Father's Name:</label>
            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter Father's Name" required />
            {errors.fatherName && <p style={{ color: "red" }}>{errors.fatherName}</p>}

            <label>Mother's Name:</label>
            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter Mother's Name" required />
            {errors.motherName && <p style={{ color: "red" }}>{errors.motherName}</p>}

            <label>Education:</label>
            <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Enter Education" required />
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    
  );
};

export default FormInput;
