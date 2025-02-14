import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stopshop from "../Assets/stopshop_mainlogo.svg";
import "./SignIn.css";

function SignIn() {
  const [activeTab, setActiveTab] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  const toggleForm = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();
  const [formDataM, setFormDataM] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [showDuplicateEmailAlert, setShowDuplicateEmailAlert] = useState(false);

  const handleFormSubmitM = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/login/", formDataM, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        const role = response.data.firstname;

        const accessToken = response.data.access;
        localStorage.setItem("accessToken", accessToken);

        navigate("/dashboard");

        console.log(role);
        console.log("Successful");
        setRegistrationStatus("success");
        setFormDataM({
          email: "",
          password: "",
        });
        console.log("Response data:", response.data);
        setTimeout(() => {
          setIsSubmitting(false); // Stop loading
          navigate("/dashboard");
          setFormDataM({
            email: "",
            password: "",
          });
        }, 2000); // Delay navigation for 2 seconds
      } else {
        alert("invalid username.Password");
        setRegistrationStatus("failed");
        setIsSubmitting(false); // Stop loading
      }
    } catch (error) {
      setFormDataM({
        email: "",
        password: "",
      });
      setErrorMessage("Incorrect UserName or Password");
      setRegistrationStatus("failed");
      setIsSubmitting(false); // Stop loading
    }
  };

  const handleInputChangeS = (event) => {
    const { id, value } = event.target;
    setFormDataM((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(value);
  };













  

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/register/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response) {
        const role = response.data.firstname;

        console.log(role);
        console.log("Successful");
        setRegistrationStatus("success");
        setSucessMessage("SignUp successfully");

        // alert("Sign up successfully");
        console.log("Before reset:", formData);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
        console.log("After reset:", formData);

        console.log("Response data:", response.data);
        setTimeout(() => {
          setIsSubmitting(false); // Stop loading
          navigate("/");
        }, 2000); // Delay navigation for 2 seconds
      } else {
        setRegistrationStatus("failed");
        setIsSubmitting(false); // Stop loading
      }
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
      if (
        error.response.data.email &&
        error.response.data.email[0] ===
          "custom user with this email already exists."
      ) {
        setRegistrationStatus("duplicate_email");
        setShowDuplicateEmailAlert(true);
      } else {
        setRegistrationStatus("failed");
      }
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(value);
  };
  return (
    <div className="main_form">
      <div className="form-wrapper animated bounceInDown">
        <div className="w-100 text-center mt-3">
          <img src={stopshop} />
        </div>
        <div className="form-header fc">
          <ul className="tab-group">
            <li
              className={activeTab === "login" ? "tab active" : "tab"}
              onClick={() => toggleForm("login")}
            >
              <a href="#login">Log In</a>
            </li>

            <li
              className={activeTab === "signup" ? "tab active" : "tab"}
              onClick={() => toggleForm("signup")}
            >
              <a href="#signup">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="tab-content fc">
          <div
            id="login"
            style={{ display: activeTab === "login" ? "block" : "none" }}
          >
            <form onSubmit={handleFormSubmitM}>
              <div className="form-container">
                <h3>Welcome</h3>
                <div className="input-group input-group-lg">
                  <span
                    className="input-group-addon glyphicon glyphicon-user"
                    id="sizing-addon1"
                  ></span>
                  <input
                    type="email"
                    id="email"
                    label="EMAIL"
                    variant="outlined"
                    className="form-control"
                    placeholder="Enter Email"
                    aria-describedby="sizing-addon1"
                    required
                    onChange={handleInputChangeS}
                    value={formDataM.email} // Update value here
                  />
                </div>

                <div className="input-group input-group-lg">
                  <span
                    className="input-group-addon glyphicon glyphicon-lock"
                    id="sizing-addon1"
                  ></span>
                  <input
                    type="password"
                    id="password"
                    required
                    className="form-control"
                    placeholder="Enter Password"
                    aria-describedby="sizing-addon1"
                    value={formDataM.password} // Update value here
                    onChange={handleInputChangeS}
                  />
                </div>
              </div>
              <div className="form-footer fc">
                <button
                  type="submit"
                  className="fr btn btn_form"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
              </div>
              {errorMessage && (
                <div className="text-center alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
          <div
            id="signup"
            style={{ display: activeTab === "signup" ? "block" : "none" }}
          >
            <form onSubmit={handleFormSubmit}>
              <div className="form-container">
                <div className="form-group pb-3 ">
                  <input
                    id="firstname"
                    type="firstname"
                    label="FULL NAME"
                    aria-describedby="sizing-addon1"
                    placeholder="First Name"
                    className="form-control"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      className: "custom-label",
                    }}
                    value={formData.firstname} // Update value here
                    onChange={handleInputChange}
                  />
                  <div className="form-group pb-3"></div>
                  <input
                    id="lastname"
                    label="FULL NAME"
                    placeholder="Last Name"
                    className="form-control"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      className: "custom-label",
                    }}
                    value={formData.lastname} // Update value here
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    id="email"
                    label="EMAIL"
                    variant="outlined"
                    placeholder="Email"
                    className="form-control"
                    fullWidth
                    InputLabelProps={{
                      className: "custom-label",
                    }}
                    value={formData.email} // Update value here
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group pb-3">
                  <input
                    id="password"
                    label="PASSWORD"
                    placeholder="Password"
                    className="form-control"
                    variant="outlined"
                    type="password"
                    fullWidth
                    InputLabelProps={{
                      className: "custom-label",
                    }}
                    required
                    value={formData.password} // Update value here
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  {/* <input
                  id="password_confirmation"
                  label="CONFIRM PASSWORD"
                  variant="outlined"
                  type="password"
                  fullWidth
                  InputLabelProps={{
                    className: "custom-label",
                  }}
                  required
                  onChange={handleInputChange}
                /> */}
                </div>

                <div className="container">
                  {" "}
                  <div className="form-footer fc">
                    <button type="submit" className="fr btn  btn_form">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              {sucessMessage && (
                <div
                  className="text-center success alert alert-success"
                  role="alert"
                >
                  {sucessMessage}
                </div>
              )}
            </form>
          </div>
        </div>
        {registrationStatus === "duplicate_email" &&
          showDuplicateEmailAlert && (
            <div className="alert alert-danger" role="alert">
              A user with this email already exists. Please use a different
              email.
            </div>
          )}
      </div>
      {/* Error Alert for Duplicate Email */}
    </div>
  );
}

export default SignIn;
