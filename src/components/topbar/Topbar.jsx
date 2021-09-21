import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"

export default function Topbar() {

  const history = useHistory() ;
  const logoutAction = function(e) {
    e.preventDefault() ;
    localStorage.removeItem("authToken");
    localStorage.removeItem('id') ;
    history.push('/login') ;
    window.location.reload('/login');

}

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ethio Charity Hub</span>
        </div>
        <div className="topRight">
        
                         
      <Button onClick={logoutAction} type="button" class="btn btn-outline-secondary" size="sm">Log Out</Button>       
      </div>
    </div>
    </div>
  );
}
