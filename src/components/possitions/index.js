import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { fetchPositions, addedCandidat } from "../../redux/actions";

const useInputValue = (resetError = () => {}, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
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

const Positions = ({ positions, fetchPositions, addedCandidat, location }) => {
  const [file, setFile] = useState(null);
  const name = useInputValue();
  const surName = useInputValue();
  const email = useInputValue();
  const skills = useInputValue();
  const experience = useInputValue();
  const education = useInputValue();
  const position = useInputValue();
  const gender = useInputValue();
  const age = useInputValue();

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  //Errors
  const [nameError, setNameError] = useState("");
  const [surNameError, setSurNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [skillsError, setSkillsError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const [educationError, setEducationError] = useState("");
  const [positionError, setPositionError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [ageError, setAgeError] = useState("");

  const validate = () => {
    let nameError = "";
    let surNameError = "";
    let emailError = "";
    let skillsError = "";
    let experienceError = "";
    let educationError = "";
    let positionError = "";
    let genderError = "";
    let ageError = "";
    if (
      !email.value().includes("@") ||
      !email.value().includes(".") ||
      email.value().length < 6
    ) {
      emailError = "invalid email";
    }
    if (!position.value()) {
      positionError = "position cannot be blank";
    }
    if (!gender.value()) {
      genderError = "gender cannot be blank";
    }
    if (!age.value()) {
      nameError = "age cannot be blank";
    }
    if (!name.value()) {
      nameError = "name cannot be blank";
    }
    if (!surName.value()) {
      surNameError = "surname cannot be blank";
    }
    if (!email.value()) {
      emailError = "email cannot be blank";
    }
    if (!skills.value()) {
      skillsError = "skills cannot be blank";
    }

    if (!experience.value()) {
      experienceError = "experience cannot be blank";
    }
    if (!education.value()) {
      educationError = "education cannot be blank";
    }
    if (
      emailError ||
      nameError ||
      surNameError ||
      skillsError ||
      experienceError ||
      educationError ||
      positionError ||
      genderError ||
      ageError
    ) {
      setEmailError(emailError);
      setNameError(nameError);
      setSurNameError(surNameError);
      setSkillsError(skillsError);
      setExperienceError(experienceError);
      setEducationError(educationError);
      setPositionError(positionError);
      setGenderError(genderError);
      setAgeError(ageError);
      return false;
    }
    return true;
  };

  const fileSelectedHendler = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleAddCondidate = e => {
    e.preventDefault();

    const fd = new FormData();
    console.log("fd", fd);
    if (file) {
      console.log("file", file);
      fd.append("cv", file, file.name);
    }
    const isValid = validate();
    if (isValid) {
      const obj = {
        name: name.value(),
        surName: surName.value(),
        email: email.value(),
        skills: skills.value(),
        experience: experience.value(),
        education: education.value(),
        position: position.value(),
        gender: gender.value(),
        age: age.value()
      };

      Object.keys(obj).map(key => {
        return fd.append(key, obj[key]);
      });
      for (var key of fd.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      addedCandidat(fd);
      name.clear();
      surName.clear();
      email.clear();
      skills.clear();
      experience.clear();
      education.clear();
      position.clear();
      gender.clear();
      age.clear();
      setFile(null);
      setNameError("");
      setSurNameError("");
      setEmailError("");
      setExperienceError("");
      setEducationError("");
      setSkillsError("");
      setPositionError("");
      setGenderError("");
      setAgeError("");
    }
  };

  return (
    <div style={{ margin: "20px", height: "100%" }}>
      <form onSubmit={handleAddCondidate}>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select position</label>
          <select
            {...position.bind}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="" style={{ display: "none" }}>
              Select position
            </option>
            {positions.map((x, i) => {
              return (
                <option key={i} value={x._id}>
                  {x.title}
                </option>
              );
            })}
          </select>
          <div style={{ color: "red", fontSize: "12px" }}>{positionError}</div>
        </div>
        <div className="form-group">
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
        <div className="form-row">
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
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Surname</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Surname"
              {...surName.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{surNameError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">Select Gender</label>
            <select
              {...gender.bind}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option value="" style={{ display: "none" }}>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div style={{ color: "red", fontSize: "12px" }}>{genderError}</div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Age</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Age"
              {...age.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{ageError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Experience</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Experience"
              {...experience.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>
              {experienceError}
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlTextarea1">Skills</label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Skills"
              {...skills.bind}
            />
            <div style={{ color: "red", fontSize: "12px" }}>{skillsError}</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputCity">Education</label>
          <textarea
            type="text"
            className="form-control"
            id="inputCity"
            rows="3"
            {...education.bind}
          ></textarea>
          <div style={{ color: "red", fontSize: "12px" }}>{educationError}</div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
            onChange={fileSelectedHendler}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit your application
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ positions }) => {
  return {
    positions
  };
};

const mapDispatchToProps = {
  fetchPositions,
  addedCandidat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Positions));
