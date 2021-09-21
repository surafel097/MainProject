import React, { Fragment, useState } from 'react';
import Message from '../../components/notify/Message';
import Progress from '../../components/notify/Progress';
import axios from 'axios';
import { Description } from '@material-ui/icons';


const createAxios = axios.create({
  baseURL: `http://localhost:4000/api/v1` 
})

export default function Post () {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [des, setDes] = useState("");

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', file.name) ;
    formData.append('description', des) ;

    try {
      const res = await createAxios.post('/post', formData, {
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
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  return (
    <div className="card"> 
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div>
        <input  value={des}
            onChange={(e) => setDes(e.target.value)} type="text" class="form-control" placeholder="leave a comment" />
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

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
    </div>
  );
};






















// import "./post.css";
// import  React , {useState} from 'react' ;
// import axios from 'axios' ;


// const createAxios = axios.create({
//   baseURL: `http://localhost:4000/api/v1` 
// })

// export default function Post() {

//   const [image , setImage] = React.useState("") ;
//   const [description , setDescription] = React.useState("") ;
//   const imageRef = React.useRef(null) ;
//   const [Succcess, setSuccess] = useState("");
//   const [Error, setError] = useState("");
//   const [fileName , setfileName] = useState() ;
//   const [file ,setfile] = useState() ;
//   const config = {
//     header: {
//       "Content-Type": "multipart/form-data",
//     },
//   };

//   let imageFile = null ;

//   const formData = new FormData() ;

//   formData.append("file",file ) ;
//   formData.append("fileName" ,fileName) ;
//   formData.append("description" , description )

//   const handleSubmit = async (e) => {
//       e.preventDefault() ;

//     console.log(localStorage.getItem('id'))

//       try{ 
      
//         const { data } = await createAxios.post( `/post`  , 
      
//          {description} , config);

//        setSuccess("SuccessFully Added");
//        setTimeout(() => {
//         setSuccess("")
//        }, 5000);
     
//       } catch(error) {
//         setError("SuccessFully Added");
//         console.log(error) ;
//         console.log('Failed') ;
//       }
//       console.log('working haa..')
//   }

//   function useDisplayImage() {
//     const [result, setResult] = React.useState("");

//     function uploader(e) {
//       imageFile = e.target.files[0];
//       setfile(e.target.files[0])
//       setfileName(e.target.files[0].name) ;
//       const reader = new FileReader();
//       reader.addEventListener("load", (e) => {
//         setResult(e.target.result);
//       });

//       reader.readAsDataURL(imageFile);
//     }

//     return { result, uploader };
//   }
//   const { result, uploader } = useDisplayImage();


//   return (
//     <div className="newProduct">
//       <div>
//       <h1 className="addProductTitle">Create Story</h1>
//       <form className="addProductForm">
//       {Succcess && <span className="success-message">{Succcess}</span>}
//       {Error && <span className="success-message">{Succcess}</span>}
//         <div className="addProductItem">
//           <label>Image</label>
//           <input type="file" id="file"  onChange={(e) => {
//           setImage(e.target.files[0]);
//           uploader(e);}}/>
//         </div>
//         <div className="addProductItem">
//           <label>Desctiption</label>
//           <input onChange={(e) => setDescription(e.target.value)}
//             value={description}
//           type="text" placeholder="say some thing" />
//         </div>
   
      
//         <button onClick={handleSubmit} className="addProductButton">Create</button>
//       </form>
//       </div>
//       <div class="image">
//       <img src={result}></img>
//       </div>
      
//     </div>
//   );
// }
