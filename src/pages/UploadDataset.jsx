import { useState } from "react";
import axios from "axios";


export default function UploadDataset() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );

      setMessage("Upload Successful");
      setUploadedFile(res.data);
      console.log(res.data);

    } catch (err) {
      setMessage("Upload Failed");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Dataset</h2>

      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={uploadFile}>
        Upload
      </button>

      <p>{message}</p>
      <br />

      <button>
       Train Model
       </button>
      {
  uploadedFile && (
    <div>
      <h3>Uploaded File</h3>

      <p>
        {uploadedFile.originalName}
      </p>
    </div>
  )
}
    </div>
  );
}
