import { useState, useEffect } from "react";
//import "./App.css";
import Axios from "axios";



function GraduateProgramPage() {

  const [levelSelection, setLevelSelection] = useState();
  const [programSelection, setProgramSelection] = useState();
  const [divisionSelection, setDivisionSelection] = useState();
  const [userID, setUserID] = useState();
  const id = sessionStorage.getItem('userID');






  const submitForm = () => {


    Axios.post('http://localhost:3001/api/programInfo',
      { level: levelSelection, program: programSelection, division: divisionSelection, id: id })


    console.log("inside submit reg convert dashboard");

  };



  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/StudentPage';
  };



  return (



    <div className="container">

      <form onSubmit={handleSubmit}>
        <h1>Registeration For Program</h1>
        <h3>Choose What Program You Want</h3>
        <div className="ui divider"></div>
        <div className="ui form">



          <label for="level">Select the level: </label>
          <select id="level" name="level" value={levelSelection} onChange={e => setLevelSelection(e.target.value)} >
            <option value="" disabled selected>Select your option</option>
            <option value="master">Master Level</option>
            <option value="diploma">Diploma Lavel</option>
            <option value="bachelor">Bachelor Level</option>
          </select>

          <br />
          <br />



          <label for="level">Select the program: </label>
          <select id="program" name="program" value={programSelection} onChange={e => setProgramSelection(e.target.value)} >
            <option value="" disabled selected>Select your option</option>
            <option value="cs">Computer Science</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="dataScience">Data Science</option>
            <option value="eng">Engineering</option>
            <option value="ba">Business Administration</option>

          </select>

          <br />
          <br />



          <label for="level">Select the division: </label>
          <select id="division" name="division" value={divisionSelection} onChange={e => setDivisionSelection(e.target.value)} >
            <option value="" disabled selected>Select your option</option>
            <option value="misk">Misk Academy</option>
            <option value="udemy">Udemy</option>
            <option value="coursera">Coursera</option>
          </select>


          <br /> <br />

          <div className="center"> <button className="submitButton" onClick={submitForm}   >Submit</button> </div> <br /><br />
        </div>
      </form>


    </div>
  );
}

export default GraduateProgramPage;