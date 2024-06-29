import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaBriefcase,
  FaIdCard,
  FaBook,
  FaVenusMars,
  FaCalendarAlt,
} from "react-icons/fa";
import "./RegisterForm.css";
import {
  SALUTATION_OPTIONS,
  GENDER_OPTIONS,
  AGE_INTERVAL,
  WORK_PLACE_SETTING,
  MEDICAL_SPECIALITY,
  COUNTRY_OF_ORIGIN_OPTIONS,
  backendBaseUrl,
} from "../config";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    salutation: "",
    gender: "",
    fullName: "",
    age: "",
    dateOfBirth: new Date(),
    countryOfOrigin: "",
    workLocation: "",
    workPlaceSetting: "",
    medicalId: "", // Initially empty
    medicalSpeciality: "",
    education: "",
    role: "user",
  });

  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      salutation,
      gender,
      fullName,
      age,
      dateOfBirth,
      countryOfOrigin,
      workLocation,
      workPlaceSetting,
      medicalId,
      medicalSpeciality,
      education,
      role,
    } = formData;

    try {
      const body = {
        email,
        password,
        salutation,
        gender,
        fullName,
        age,
        dateOfBirth,
        countryOfOrigin,
        workLocation,
        workPlaceSetting,
        medicalSpeciality,
        education,
        role,
      };

      // Only include medicalId in the request if it is populated
      if (medicalId) {
        body.medicalId = medicalId;
      }

      const response = await fetch(`${backendBaseUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      setIsError(true);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-form-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <div className="custom-select-wrapper">
              <select
                name="salutation"
                value={formData.salutation}
                onChange={handleChange}
                className="custom-select"
                required
              >
                <option value="">Select Salutation</option>
                {SALUTATION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group">
            <FaVenusMars className="input-icon" />
            <div className="custom-select-wrapper">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="custom-select"
                required
              >
                <option value="">Select Gender</option>
                {GENDER_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <div className="custom-select-wrapper">
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="custom-select"
                required
              >
                <option value="">Select Age Interval</option>
                {AGE_INTERVAL.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group date-of-birth-group">
            <FaCalendarAlt className="input-icon date-icon" />
            <label htmlFor="dateOfBirth" className="date-label">Date of Birth</label>
            <DatePicker
              id="dateOfBirth"
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              showMonthDropdown
              placeholderText="Select Date"
              required
            />
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <div className="custom-select-wrapper">
              <select
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleChange}
                className="custom-select"
                required
              >
                <option value="">Select Country of Origin</option>
                {COUNTRY_OF_ORIGIN_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group">
            <FaBriefcase className="input-icon" />
            <input
              type="text"
              name="workLocation"
              value={formData.workLocation}
              onChange={handleChange}
              placeholder="Work Location"
              required
            />
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <div className="custom-select-wrapper">
              <select
                name="workPlaceSetting"
                value={formData.workPlaceSetting}
                onChange={handleChange}
                className="custom-select"
                required
              >
                <option value="">Select Work Place Setting</option>
                {WORK_PLACE_SETTING.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <input
              type="text"
              name="medicalId"
              value={formData.medicalId}
              onChange={handleChange}
              placeholder="Medical ID"
            />
          </div>
          <div className="input-group">
            <FaIdCard className="input-icon" />
            <div className="custom-select-wrapper">
              <select
                name="medicalSpeciality"
                value={formData.medicalSpeciality}
                onChange={handleChange}
                className="custom-select"
                required
              >
                <option value="">Select Medical Speciality</option>
                {MEDICAL_SPECIALITY.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group">
            <FaBook className="input-icon" />
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Education"
              required
            />
          </div>
          <button className="register-form-button">Register</button>
        </form>
        {isError && (
          <p>Error: Unable to register. Something went wrong.</p>
        )}
        <div className="login-message">
          <p>
            Already have an account?{" "}
            <button onClick={handleLogin}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
