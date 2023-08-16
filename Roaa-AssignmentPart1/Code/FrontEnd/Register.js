import { useState, useEffect } from "react";
//import "./App.css";
import Axios from "axios";
import { Outlet, Link } from "react-router-dom";



function Register() {
  const initialValues = { fname: "", lname: "", email: "", birthdate: "", photo: "", password: "", conPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const submitForm = () => {
    Axios.post('http://localhost:3001/api/insert', { fname: formValues.fname, lname: formValues.lname, email: formValues.email, birthdate: formValues.birthdate, photo: formValues.photo, password: formValues.password }).then(() => { alert("succesfull") });

  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);


  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      window.location.href = '/Login';
    }
  }, [formErrors]);



  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


    if (!values.fname) {
      errors.fname = "First name is required!";
    }
    if (!values.lname) {
      errors.lname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.birthdate) {
      errors.birthdate = "Birthdate is required!";
    }
    if (!values.photo) {
      errors.photo = "You must upload a picture ";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!(values.password === values.conPassword)) {
      errors.password = "The passwords are not match";
    }
    return errors;
  };





  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ?
        //window.location.href = '/Login'
        (
          <div className="ui message success">reg in successfully</div>

        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )


      }

      <form onSubmit={handleSubmit}>
        <h1>Registeration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">

          <div className="field">
            <label>First name </label>
            <input
              type="text"
              name="fname"
              placeholder="Frist name"
              value={formValues.fname}
              onChange={handleChange}
            />
            <span> {formErrors.fname}</span>
          </div>

          <br />

          <div className="field">
            <label>Last name </label>
            <input
              type="text"
              name="lname"
              placeholder="last name"
              value={formValues.lname}
              onChange={handleChange}
            />
            <span> {formErrors.lname}</span>
          </div>


          <br />

          <div className="field">

            <label>Email </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />

            <span> {formErrors.email}</span>
          </div>


          <br />


          <div className="field">
            <label>Birthdate </label>
            <input
              type="date"
              name="birthdate"
              placeholder="birthdate"
              value={formValues.birthdate}
              onChange={handleChange}
            />
            <span> {formErrors.birthdate}</span>
          </div>


          <br />


          <div className="field">
            <label>Photo </label>
            <input
              type="file"
              accept="image/*"
              name="photo"
              placeholder="photo"
              value={formValues.photo}
              onChange={handleChange}
            />
            <span> {formErrors.photo}</span>
          </div>


          <br />

          <div className="field">

            <label>Password </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <span> {formErrors.password}</span>
          </div>


          <br />



          <div className="field">
            <label>Confirm password </label>
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm password"
              value={formValues.conPassword}
              onChange={handleChange}
            />
            <span> {formErrors.conPassword}</span>
          </div>

          <br />

          <div className="center"> <button className="submitButton" onClick={submitForm}   >Submit</button> </div> <br /><br />
          <div>already have account? <Link to="/Login">click here to login</Link> </div>

        </div>
      </form>


    </div>
  );
}

export default Register;