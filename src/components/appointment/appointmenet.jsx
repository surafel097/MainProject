import "./appointment.css";
import axios from 'axios' ;
import { useEffect , useState } from "react";


export default function Apoint() {


  const [Appoint, setAppoint] = useState([]);

 
  useEffect(() => {
    const fetchData = async() => {
        try{

            console.log('trying to connect!!!!!!!!!!!!!1')
            const response = await axios.get('http://localhost:4000/api/v1/apointment') ;
            console.log(response)
            setAppoint(response.data.data.apointment) ;

        } catch(err) {
            // console.log('error has occured ' + err) ;
            console.log(err) ;
            // console.log(err.response.status) ;
            // console.log(err.response.headers) ;
        }
        
    } 
    fetchData() ;
}, [])
  

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Appointments</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Appointment Date</th>
          <th className="widgetLgTh">Appointed By</th>
          <th className="widgetLgTh">Message</th>
          <th className="widgetLgTh">Phone No</th>
        </tr>
        { Appoint.map ( (i) => {     
          return [ 
            <>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{i.apointmentedAt}</span>
          </td>
          <td className="widgetLgDate">{i.user.name}</td>
          <td className="widgetLgDate">{i.description}</td>

          <td className="widgetLgAmount">{i.user.phoneNo}</td>
          
        </tr>
        </>
          ]})}
        {/* <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr> */}
       
      </table>
    </div>
  );
}
