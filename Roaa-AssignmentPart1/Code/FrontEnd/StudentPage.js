import { useState, useEffect } from "react";
//import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";




function StudentPage() {

  const id = sessionStorage.getItem('userID');
  const [userFName, setUserFName] = useState();
  const [userLName, setUserLName] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const [userLevel, setUserLevel] = useState();
  const [userProgram, setUserProgram] = useState();
  const [userDivision, setUserDivision] = useState();

  const [userData, setUserData] = useState();





  useEffect(() => {

    Axios.post('http://localhost:3001/api/getProfileInfo', { id }).then((response) => {

      //setUserName(response.data) ;


      setUserFName(response.data.map(({ fname }) => fname));
      setUserLName(response.data.map(({ lname }) => lname));
      setUserPhoto(response.data.map(({ img }) => img));
      setUserLevel(response.data.map(({ level }) => level));
      setUserProgram(response.data.map(({ program }) => program));
      setUserDivision(response.data.map(({ division }) => division));



      console.log(response.data);


    });

  }, [id]);




  return (



    <div className="userPage">


      <h1> Profile</h1>

      <h4>Name: {userFName} {userLName}</h4>
      <h4>Level: {userLevel} </h4>
      <h4>Program: {userProgram}</h4>
      <h4>Division:{userDivision}</h4>

      <Link to="/Login" className="buttonStyle"> logout </Link>



    </div>

  );
}

export default StudentPage;