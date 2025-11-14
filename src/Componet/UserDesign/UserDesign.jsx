import React, { useState, useEffect } from 'react';
import '../UserDesign/user.css';

function UserDesign() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  // Handle uploading files to backend (placeholder for future backend)
  const handleUpload = async () => {
    if (!selectedFiles.length) return;

    // For now, we just preview locally
    const previews = selectedFiles.map((file) => ({
      name: file.name,
      image: URL.createObjectURL(file),
    }));
    setUploadedImages((prev) => [...prev, ...previews]);

    // Clear selected files
    setSelectedFiles([]);

    // TODO: Send files to backend using fetch or axios
    // const formData = new FormData();
    // selectedFiles.forEach(file => formData.append('images', file));
    // await fetch('/api/upload', { method: 'POST', body: formData });
  };

  return (
    <div className="user-design-section">
      <h2>Upload Your Custom Design</h2>
      <p>Upload your own furniture or decor design and see it previewed below!</p>

      <div className="upload-controls">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <button onClick={handleUpload} disabled={!selectedFiles.length}>
          Upload
        </button>
      </div>

      <div className="uploaded-images">
        {uploadedImages.map((img, index) => (
          <div key={index} className="uploaded-item">
            <img src={img.image} alt={img.name} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDesign;
