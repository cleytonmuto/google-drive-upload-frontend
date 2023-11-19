import React, {useRef} from 'react';

import './App.css';

const App = () => {
  const fileInputRef = useRef(null);
  const handleFileUpload = async () => {
    const files = fileInputRef.current.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let file of files) {
        formData.append('files', file);
      }
      try {
        const response = await fetch('https://fullstackers.com.br:7443/upload',{
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        console.log('uploaded files: ', data.files);
      }
      catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="App">
      <h1><center>Upload multiple files to Google Drive</center></h1>
      <input type="file" multiple ref={fileInputRef} />
      <button onClick={handleFileUpload}>Upload files</button>
    </div>
  );
}

export default App;
