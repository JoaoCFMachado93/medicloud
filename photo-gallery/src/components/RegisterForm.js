import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaCalendarAlt, FaBriefcase, FaIdCard, FaBook } from 'react-icons/fa'; // Import icons from react-icons library
import './RegisterForm.css'; // Import custom CSS for the register form

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    age: '',
    workLocation: '',
    medicalId: '',
    medicalSpeciality: '',
    education: '',
    role: 'user' // Set role to 'user' by default
  });

  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, fullName, age, workLocation, medicalId, medicalSpeciality, education, role } = formData;
  
    if (!email || !password || !fullName || !age || !workLocation || !medicalId || !medicalSpeciality || !education || !role) {
      setIsError(true);
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigate('/'); 
    } catch (error) {
      console.error('Registration failed:', error);
      setIsError(true);
    }
  };
  

  const handleLogin = () => {
    navigate('/login');
  };


  return (
    <div className="register-form-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <FaCalendarAlt className="input-icon" />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
          </div>
          <div className="input-group">
            <FaBriefcase className="input-icon" />
            <input type="text" name="workLocation" value={formData.workLocation} onChange={handleChange} placeholder="Work Location" required />
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <input type="text" name="medicalId" value={formData.medicalId} onChange={handleChange} placeholder="Medical ID" required />
          </div>
          <div className="input-group">
            <FaBook className="input-icon" />
            <input type="text" name="medicalSpeciality" value={formData.medicalSpeciality} onChange={handleChange} placeholder="Medical Speciality" required />
          </div>
          <div className="input-group">
            <FaBook className="input-icon" />
            <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" required />
          </div>
          <button className="register-form-button">Register</button>
        </form>
        {isError && <p>Error: Unable to register. Please fill all required fields.</p>}
        <div className="login-message">
          <p>Already have an account? <button onClick={handleLogin}>Login</button></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
