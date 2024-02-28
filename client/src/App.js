import { useEffect, useRef, useState } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {

  const [file,setFile]=useState("");

  const fileInputRef=useRef();

  const image="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"
 
  useEffect(()=>{
    const getImage= async ()=>{
      if(file){
       const data=new FormData();
       data.append("name",file.name);
       data.append("file",file);

       let response=await uploadFile();
      }
    }
    getImage();
  },[file])

  const onUploadClick=()=>{
    fileInputRef.current.click();
  }
  console.log(file);
  return (
    <div className="container">
     <img src={image} alt="banner" />
     <div className='wrapper'>
      <h1>Simple file sharing!</h1>
      <p>Upload and share the download link.</p>
      <button onClick={()=>onUploadClick()}>Upload</button>
      <input style={{display: "none"}} type="file"
      ref={fileInputRef} 
        onChange={(e)=>setFile(e.target.files[0])}
      />
     </div>
    </div>
  );
}

export default App;
