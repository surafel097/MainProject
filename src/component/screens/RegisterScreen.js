import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import React, { Fragment, useState } from 'react';
import Message from '../../components/notify/Message';
import Progress from '../../components/notify/Progress';

const createAxios = axios.create({
  baseURL: `http://localhost:4000/api/v1` 
}) ;

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [catagory, setCatagory] = useState("") ;

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', username) ;
    formData.append('email', email) ;
    formData.append('password', password) ;
    formData.append('passwordConfirm', confirmpassword) ;

    formData.append('catagory', catagory) ;



    try {
      const res = await createAxios.post( "/orgs/signup"      , formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
      localStorage.setItem("authToken", res.token);
    localStorage.setItem("id" , res.data.user.id) ;
    history.push("/");
    } catch (err) {
      console.log(err) ;
      // if (err.response.status === 500) {
      //   setMessage('There was a problem with the server');
      // } else {
      //   setMessage(err.response.data.msg);
      // }
      setUploadPercentage(0)
    }
          

  };


  // const registerHandler = async (e) => {

  //   e.preventDefault();
  //   console.log('Registration ...................')
  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   if (password !== confirmpassword) {
  //     setPassword("");
  //     setConfirmPassword("");
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //     return setError("Passwords do not match");
  //   }
  //   try {
  //     const { data } = await createAxios.post(
  //       "/orgs/signup",
  //       {
  //         "name": username,
  //         "email":email,
  //         "password": password,
  //         "passwordConfirm": confirmpassword
  //       },
  //       config
  //     );
  //     console.log(data) ;
  //     
  
      // history.push("/");
  //   } catch (error) {
  //     console.log(error) ;
  //     setError("Wrong Credential");
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };

  return (
    <div className="register-screen">
      <form  className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="card"> 
    <Fragment>
      {message ? <Message msg={message} /> : null}
      {/* <form onSubmit={onSubmit}> */}
        <div>
        Add your Legal Papers
        </div>
        <div id="post" className='custom-file mb-4'>
        

          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        {/* <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        /> */}
      {/* </form> */}
      
    </Fragment>
    </div>
   
        <button onClick={onSubmit} type="submit" className="btn btn-primary">
          Register
        </button>
        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
