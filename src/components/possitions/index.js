import React, { useState } from "react";
import FileUpload from "../file-upload";

const useInputValue = (resetError = () => {}, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  // const [isValid, setValid] = useState(false);

  return {
    bind: {
      value,
      onChange: e => {
        resetError();
        setValue(e.target.value);
      }
    },
    clear: () => setValue(""),
    value: () => value
  };
};

const Possitions = () => {
  const name = useInputValue();
  const email = useInputValue();
  const about = useInputValue();
  const address = useInputValue();
  const city = useInputValue();
  const possition = useInputValue();

  //Errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [aboutError, setAboutError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [possitionError, setPossitionError] = useState("");

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let aboutError = "";
    let addressError = "";
    let cityError = "";
    let possitionError = "";
    if (
      !email.value().includes("@") ||
      !email.value().includes(".") ||
      email.value().length < 6
    ) {
      emailError = "invalid email";
    }
    if (!possition.value()) {
      possitionError = "possition cannot be blank";
    }
    if (!name.value()) {
      nameError = "name cannot be blank";
    }
    if (!email.value()) {
      emailError = "email cannot be blank";
    }
    if (!about.value()) {
      aboutError = "about cannot be blank";
    }
    if (about.value().length < 100) {
      aboutError = "100 characters minimum";
    }
    if (!address.value()) {
      addressError = "address cannot be blank";
    }
    if (!city.value()) {
      cityError = "city cannot be blank";
    }
    if (
      emailError ||
      nameError ||
      aboutError ||
      addressError ||
      cityError ||
      possitionError
    ) {
      setEmailError(emailError);
      setNameError(nameError);
      setAboutError(aboutError);
      setAddressError(addressError);
      setCityError(cityError);
      setPossitionError(possitionError);
      return false;
    }
    return true;
  };

  const handleAddCondidate = e => {
    e.preventDefault();

    const isValid = validate();
    if (isValid) {
      const obj = {
        name: name.value(),
        email: email.value(),
        about: about.value(),
        address: address.value(),
        city: city.value(),
        possition: possition.value()
      };
      console.log(obj);
      name.clear();
      email.clear();
      about.clear();
      address.clear();
      city.clear();
      possition.clear();
      setNameError("");
      setEmailError("");
      setAboutError("");
      setAddressError("");
      setCityError("");
      setPossitionError("");
    }
  };

  return (
    <div style={{ margin: "20px", height: "100%" }}>
      <form onSubmit={handleAddCondidate}>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select possition</label>
          <select
            {...possition.bind}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="" style={{ display: "none" }}>
              Select possition
            </option>
            <option value="react">React.js</option>
            <option value="node.js">Node.js</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="ux/ui">UX/UI</option>
          </select>
          <div style={{ color: "red", fontSize: "12px" }}>{possitionError}</div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              {...email.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{emailError}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Name"
              {...name.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{nameError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              {...address.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{addressError}</div>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              {...city.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{cityError}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">About You</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            {...about.bind}
          ></textarea>
          <div style={{ color: "red", fontSize: "12px" }}>{aboutError}</div>
        </div>
        <div className="form-group">
          <FileUpload />
        </div>

        <button type="submit" className="btn btn-success">
          Submit your application
        </button>
      </form>
    </div>
  );
};

export default Possitions;
