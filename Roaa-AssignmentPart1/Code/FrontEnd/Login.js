import { useState, useEffect } from "react";
//import "./App.css";
import Axios from "axios";



function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [userID, setUserID] = useState();






  const submitForm = () => {
    Axios.post('http://localhost:3001/api/post', { email: formValues.email, password: formValues.password }).then((response) => {
      console.log("login what the res?", response.data)
      if (response.data != "") {
        setUserID(response.data.map(({ id }) => id));
        console.log("inside successful");
        /*<Navigate to="/GraduateProgramPage" />*/
        window.location.href = '/GraduateProgramPage';

      } else { setFormErrors("invalid email or password") }
    });

  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setFormErrors(validate(formValues));
    setIsSubmit(true);
  };




  sessionStorage.setItem('userID', userID);

  return (

    <div className="container">




      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">

          <div className="field">

            <label>Email </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />


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

          </div>

          <span>{console.log("err???", formErrors)}</span>



          <br />


          <br />
          <br />


          <div className="center"> <button className="submitButton" onClick={submitForm}   >Submit</button> </div> <br /><br />

        </div>
      </form>


    </div>
  );
}

export default Login;
