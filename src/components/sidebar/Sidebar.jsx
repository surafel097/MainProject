import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>

            <Link to="/post" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Add Post
            </li>
            </Link>

            <Link to="/newProduct" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Add Events
            </li>
            </Link>
          </ul>
        </div>
      
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Agents
              </li>
            </Link>
            <Link to="/profile" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li>
            </Link>
            
           
          </ul>
      </div>
    </div>
  );
}
