import React from 'react'
// import NavBar from './nav'
// import LoginD from './Allforms/formHold/loginD'
// import Homescreen from './homeScreen'
// import Register from './Allforms/formHold/register'
import { Accordion, makeStyles, Paper } from '@material-ui/core'
// import RecipeReviewCard from './posting'
// import Tobar from './dashboard/topbar'
// import Sidbardash from './dashboard/sidbardash'
import './App.css'
import Home from './pages/home/Home' ;
import { BrowserRouter as Router,Switch,Route,Link, } from "react-router-dom"
// import UserList from './dashboard/pages/UserList/UserList'
// import User from './dashboard/pages/User/user'
// import NewUser from './dashboard/pages/User/newUser'
// import DonerList from './dashboard/pages/donerList'
// import PostList from './dashboard/pages/Posts/postList'
// import PostEdit from './dashboard/pages/postEdit/postEdit'
// import Newnew from './dashboard/pages/User/newnew'
// import EventList from './dashboard/pages/eventList'
// import EventEdit from './dashboard/pages/User/eventEdit'
// import AddPost from './dashboard/pages/addPost/addPost'
// import AddEvent from './dashboard/pages/addEvent/addEvent'

import PrivateRoute from "./component/routing/PrivateRoute";



import PrivateScreen from "./component/screens/PrivateScreen";
import LoginScreen from "./component/screens/LoginScreen";
import RegisterScreen from "./component/screens/RegisterScreen";
import ForgotPasswordScreen from "./component/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./component/screens/ResetPasswordScreen";



const useStyle=makeStyles(theme=>({
   pageContant:{
     width: '80%', 
     
     margin: theme.spacing(5),
     padding: theme.spacing(4),
     marginTop:'90px',
     marginLeft:'140px'
   }
  
}))
const App=()=>  {
   
 const classes=useStyle();
    return (
      <div>
         <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          {/* <PrivateRoute path="/*" component={PrivateScreen} /> */}
          <PrivateRoute path='/home' component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>

        {/* <Router>
      <Tobar />
      <div className="containerr">
         <Sidbardash/>
         <Switch>
           
         <Route path='/' exact><Home/></Route>
       <Route path='/users' exact><UserList/></Route>
       <Route path='/users/:usersId' exact><User/></Route>
       <Route path='/newUser' exact><NewUser/></Route>
       <Route path='/PostList' exact><PostList/></Route>
       <Route path='/PostList/:PostId' exact><PostEdit/></Route>
       <Route path="/DonerList" exact><DonerList/></Route>
       <Route path="/profile" exact><Newnew/></Route>
       <Route path="/event" exact><EventList/></Route>
       <Route path='/event/:eventID' exact><EventEdit/></Route>
       <Route path='/addPost' exact><AddPost/></Route>
       <Route path='/addEvent' exact><AddEvent/></Route>
          </Switch>
         
        </div>
      </Router> */}
        </div>
          
      

       
    
     
      
      
    )
  }


export default App



















// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import "./App.css";
// import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import Profile from './pages/profile/profile'  ;
// import Post from './pages/Post/post'

// function App() {
//   return (
//     <Router>
//       <Topbar />
//       <div className="container" >
//         <Sidebar />
//         <Switch>
//           <Route exact path="/" component={Home} />
           
//           <Route path="/users" component={UserList} />
  
//           <Route path="/user/:userId" component={User} />
      
//           <Route path="/newUser" component={NewUser} />

//           <Route path="/profile" component={Profile} />
           
//           <Route path="/post" component={Post} />
           
//           <Route path="/newproduct" component={NewProduct} />
           
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
