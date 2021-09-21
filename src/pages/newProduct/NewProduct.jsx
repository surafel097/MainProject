import "./newProduct.css";
import  React , {useState} from 'react' ;
import axios from 'axios'

const createAxios = axios.create({
  baseURL: `http://localhost:4000/api/v1` 
}) ;



export default function NewProduct() {

  const [image , setImage] = React.useState("") ;
  const imageRef = React.useRef(null) ;
  const [Succcess, setSuccess] = useState("");
  const [fileName , setfileName] = useState() ;
  const [file ,setfile] = useState() ;
  const [location ,setLocation] = useState("") ;

  const [description ,setDescription] = useState("") ;
  const [date ,setDate] = useState() ;



  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  let imageFile = null ;

  const formData = new FormData() ;

  formData.append("file",file ) ;
  formData.append("fileName" ,fileName) ;
  

  const handleSubmit = async (e) => {
      e.preventDefault() ;

    console.log(localStorage.getItem('id'))

      try{ 
      
        const { data } = await createAxios.post( `/event`  , 
      
         {
           "location": location ,
           "description": description ,
           "heldDate": date ,
           "org": localStorage.getItem('id') ,
         } , config);

       setSuccess("SuccessFully Added");
       setTimeout(() => {
        setSuccess("")
       }, 5000);
     
      } catch(error) {
        console.log(error) ;
        console.log('Failed') ;
      }
      console.log('working haa..')
  }

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }
  const { result, uploader } = useDisplayImage();

  return (
    <div className="newProduct">
      <div>
      <h1 className="addProductTitle">Upcoming Event</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file"  onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);}}/>
        </div>
        <div className="addProductItem">
          <label>Desctiption</label>
          <input onChange={(e) => setDescription(e.target.value)}
            value={description} type="text" placeholder="say some thing" />
        </div>
        <div className="addProductItem">
          <label>location</label>
          <input onChange={(e) => setLocation(e.target.value)}
            value={location} type="text" placeholder="Where will it be held" />
        </div>
        <div className="addProductItem">
          <label>Date</label>
          <input type="Date" onChange={(e) => setDate(e.target.value)}
            value={date}  placeholder="When will it be held" />
        </div>
      
      
        <button onClick={handleSubmit}   className="addProductButton">Create</button>
      </form>
      </div>
      <div class="image">
      <img src={result}></img>
      </div>
      
    </div>
  );
}
