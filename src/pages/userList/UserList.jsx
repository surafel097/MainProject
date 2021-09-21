import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios' ;

const createAxios = axios.create({
  baseURL: `http://localhost:4000/api/v1` 
}) ;



export default function UserList() {
  const [dataA, setData] = useState([]);
  const [error , setError ] = useState("") ;
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const  data  = await createAxios.get( `/agent?org=${localStorage.getItem('id')}`, config);
        console.log(data.data.data.Agents) ;
        setData(data.data.data.Agents);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  
  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "user",
  //     headerName: "User",
  //     width: 200,
  //     // renderCell: (params) => {
  //     //   return (
  //     //     <div className="userListUser">
  //     //       <img className="userListImg" src={params.row.avatar} alt="" />
  //     //       {params.row.username}
  //     //     </div>
  //     //   );
  //     // },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   // },
  //   // {
  //   //   field: "transaction",
  //   //   headerName: "Transaction Volume",
  //   //   width: 160,
  //   // },
  //   // {
  //   //   field: "action",
  //   //   headerName: "Action",
  //   //   width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //         <div>
  //         <Link to={"/user/" + params.row.id}>
  //             <button className="userListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="userListDelete"
  //             onClick={() => handleDelete(params.row.id)} />
  //         </div>
            
            
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="userList">
        <Link to="/newUser">
          <button className="userAddButton">Add Agent</button>
        </Link>
        <div className="col">
                    {dataA.map( (i) => ( 
                      <Link to={"/users/" +i._id}>  
                      <div class="card">
                      <div class="container">
                        <h4 class="name"><b>{i.name}</b></h4>
                        <p>{i.email}</p>
                      </div>
                      <div class="buttons">
                        <button class="">delete</button>
                      </div>
                    </div>
                    </Link>  
                    ))}
                  
    </div>
    </div>
  );
}
