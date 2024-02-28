import { useRef } from 'react';
import './App.css';

function App() {

  const fileInputRef=useRef();

  const image="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"
 
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }

  return (
    <div className="container">
     <img src={image} alt="banner" />
     <div className='wrapper'>
      <h1>Simple file sharing!</h1>
      <p>Upload and share the download link.</p>
      <button onClick={()=>onUploadClick()}>Upload</button>
      <input style={{display: "none"}} type="file"
      ref={fileInputRef} />
     </div>
    </div>
  );
}

export default App;
