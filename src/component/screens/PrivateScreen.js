import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";

// import Chart from '../../Componet/chart/chart.js'

// import Feautred from '../../Componet/feautred'
// //import './home.css'
// import { Chartdata } from '../../Componet/chartData'
// import Widgetlg from '../../Componet/widgetsmlg/widgetlg'
// import WidgetSm from '../../Componet/widgetsm/widgetsm'

import PrivateRoute from "../routing/PrivateRoute";


import React from 'react'
// import NavBar from '../../nav'
// //import LoginD from './Allforms/formHold/loginD'
// import Homescreen from '../../homeScreen'
// //import Register from './Allforms/formHold/register'
// import { Accordion, makeStyles, Paper } from '@material-ui/core'
// import RecipeReviewCard from '../../posting'
// import Tobar from '../../dashboard/topbar'
// import Sidbardash from '../../dashboard/sidbardash'
import './PrivateScreen.css' ;
// import Home from '../../dashboard/pages/home'
// import { BrowserRouter as Router,Switch,Route,Link, } from "react-router-dom"
// import UserList from '../../dashboard/pages/UserList/UserList'
// import User from '../../dashboard/pages/User/user'
// import NewUser from '../../dashboard/pages/User/newUser'
// import DonerList from '../../dashboard/pages/donerList'
// import PostList from '../../dashboard/pages/Posts/postList'
// import PostEdit from '../../dashboard/pages/postEdit/postEdit'
// import Newnew from '../../dashboard/pages/User/newnew'
// import EventList from '../../dashboard/pages/eventList'
// import EventEdit from '../../dashboard/pages/User/eventEdit'
// import AddPost from '../../dashboard/pages/addPost/addPost'
// import AddEvent from '../../dashboard/pages/addEvent/addEvent'



import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
// import "./App.css";
import Home from "../../pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../../pages/userList/UserList";
import User from "../../pages/user/User";
import NewUser from "../../pages/newUser/NewUser";
import ProductList from "../../pages/productList/ProductList";
import Product from "../../pages/product/Product";
import NewProduct from "../../pages/newProduct/NewProduct";
import Profile from '../../pages/profile/profile'  ;
import Post from '../../pages/Post/post'
import HomePost from '../../pages/postHome/postHome' ;

const createAxios = axios.create({
  baseURL: `http://localhost:4000/api/v1` 
}) ;


const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState([]);

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await createAxios.get( `/orgs/${localStorage.getItem('id')}`, config);
        console.log(data) ;
        setPrivateData(data.data.org);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <Router>
      <Topbar />
      <div className="containerr" >
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
           
          <Route path="/users" component={UserList} />
  
          <Route path="/user/:userId" component={User} />
      
          <Route path="/newUser" component={NewUser} />

          <Route path="/profile" component={Profile} />
           
          <Route path="/post" component={HomePost} />
           
          <Route path="/newproduct" component={NewProduct} />
           
        </Switch>
      </div>
    </Router>
  

    // <div className="home">
    // <Feautred/>
    // <Chart data={Chartdata} title="Donation Analitics" grid dataKey="Number of Doner"/> 
    // <div className="homeWegets">
    // <WidgetSm />
    // <Widgetlg />
        
    //</div>
 //</div>
    
  );
};

export default PrivateScreen;
