import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./postHome.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Post from '../../pages/Post/post' ;


export default function Home() {
  return (
    <div className="home">
      
      <Post/>
      <div className="homeWidgets">
        {/* <WidgetSm/>
        <WidgetLg/> */}
      </div>
    </div>
  );
}
