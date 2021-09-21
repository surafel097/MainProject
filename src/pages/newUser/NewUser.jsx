import "./newUser.css";
import React , {useState , useEffect} from 'react' ;
import axios from "axios";


const createAxios = axios.create({
  baseURL: `http://localhost:4000/api/v1` 
}) ;


export default function NewUser() {

  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Succcess, setSuccess] = useState("");


  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault() ;
    try{ 
      
      const data = await axios.post( `http://localhost:4000/api/v1/agent`  , 
    { 
       "name": userName ,
       "email" :Email ,
       "phoneNum": Phone ,
       "Address": Address ,
       "org": localStorage.getItem('id')
     }, config );
     console.log(data)
     setSuccess("SuccessFully Added");
     setTimeout(() => {
      setSuccess("")
     }, 5000);
   
    } catch(error) {
      console.log(error) ;
      console.log('Failed') ;
    }
   
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form onSubmit={handleSubmit} className="newUserForm">
      {Succcess && <span className="success-message">{Succcess}</span>}
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)}
            value={Email}
           type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input onChange={(e) => setPhone(e.target.value)}
            value={Phone}
           type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input onChange={(e) => setAddress(e.target.value)}
            value={Address}
           type="text" placeholder="New York | USA" />
        </div>
        <button type="submit" className="newUserButton">Create</button>
      </form>
    </div>
  );
}
