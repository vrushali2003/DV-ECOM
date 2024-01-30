import React, { useState } from "react";
import "../css/billingdetail.scss";

const BillingDetail = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [townCity, setTownCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [streetAddressError, setStreetAddressError] = useState("");
  const [apartmentError, setApartmentError] = useState("");
  const [townCityError, setTownCityError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [stateError, setStateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleSave = () => {
    if (
      !validateFirstName() ||
      !validateLastName() ||
      !validateStreetAddress() ||
      !validateApartment() ||
      !validateTownCity() ||
      !validatePinCode() ||
      !validateState() ||
      !validateEmail() ||
      !validatePhoneNumber()
    ) {
      console.log("Validation failed. Cannot save.");
      return;
    }
    
  
  const formData = {
    firstName,
    lastName,
    streetAddress,
    apartment,
    townCity,
    pinCode,
    state,
    email,
    phoneNumber,
    selectedCountry,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data successfully saved:", data);
      // Add any additional logic here (e.g., show a success message, update UI, etc.)
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      // Handle errors (e.g., show an error message)
    });
};



  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  const validateFirstName = () => {
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      setFirstNameError("First name must contain only alphabets.");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validateLastName = () => {
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      setLastNameError("Last name must contain only alphabets.");
      return false;
    }
    setLastNameError("");
    return true;
  };

  const validateStreetAddress = () => {
    if (!streetAddress.trim()) {
      setStreetAddressError("Street address is required.");
      return false;
    }
    setStreetAddressError("");
    return true;
  };

  const validateApartment = () => {
    return true; // Apartment field is optional, no specific validation needed
  };

  const validateTownCity = () => {
    if (!townCity.trim()) {
      setTownCityError("Town/City is required.");
      return false;
    }
    setTownCityError("");
    return true;
  };

  const validatePinCode = () => {
    if (!/^\d{6}$/.test(pinCode)) {
      setPinCodeError("Enter a valid 6-digit pin code.");
      return false;
    }
    setPinCodeError("");
    return true;
  };

  const validateState = () => {
    if (!state.trim()) {
      setStateError("State is required.");
      return false;
    }
    setStateError("");
    return true;
  };

  const validateEmail = () => {
    const trimmedEmail = email.trim(); // Trim leading and trailing spaces
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setEmailError("Enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhoneNumber = () => {
    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Enter a valid 10-digit phone number.");
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  return (
    <div className="container-fluid dv-billing">
      <h2 className="heading">Billing Details</h2>

      <form>
        <div className="row form-group">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
          
            <input
              type="text"
              id="FirstName"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={validateFirstName}
              required
            />
            {firstNameError && (
              <div className="error-message">{firstNameError}</div>
            )}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="LastName"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={validateLastName}
              required
            />
            {lastNameError && (
              <div className="error-message">{lastNameError}</div>
            )}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="Street Address"
              className="form-control"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              onBlur={validateStreetAddress}
              required
            />
            {streetAddressError && (
              <div className="error-message">{streetAddressError}</div>
            )}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="Apartment, Suite, Unit, etc"
              className="form-control"
              placeholder="Apartment, Suite, Unit, etc"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
              onBlur={validateApartment}
              required
            />
            {apartmentError && (
              <div className="error-message">{apartmentError}</div>
            )}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="Town, City"
              className="form-control"
              placeholder="Town, City"
              value={townCity}
              onChange={(e) => setTownCity(e.target.value)}
              onBlur={validateTownCity}
              required
            />
            {townCityError && (
              <div className="error-message">{townCityError}</div>
            )}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="PinCode"
              className="form-control"
              placeholder="Pincode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              onBlur={validatePinCode}
              required
            />
            {pinCodeError && (
              <div className="error-message">{pinCodeError}</div>
            )}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="State"
              className="form-control"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={validateState}
              required
            />
            {stateError && <div className="error-message">{stateError}</div>}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <div className="dropdown">
              <div className="accordion" id="accordionExample1">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={selectedCountry}
                  required
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Us">Us</option>
                  <option value="Russia">Russia</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              required
            />
            {emailError && <div className="error-message">{emailError}</div>}
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
            <input
              type="text"
              id="Phone Number"
              className="form-control"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={validatePhoneNumber}
              required
            />
            {phoneNumberError && (
              <div className="error-message">{phoneNumberError}</div>
            )}
          </div>
        </div>

        <div className="btn-style">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingDetail;