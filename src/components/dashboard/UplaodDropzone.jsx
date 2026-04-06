import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
const UplaodDropzone = () => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFiles = (files) => {
    const fileArray = Array.from(files || []);

    if (!fileArray.length) return;

    setSelectedFiles(fileArray);
    toast.success(`${fileArray.length} file(s) selected`);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };
  return (
    <div className="space-y-4">
      <div
        className={`rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-200 cursor-pointer ${
          dragActive
            ? "border-primary bg-primary/10"
            : "border-primary/40 bg-base-200"
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h3 className="text-xl font-semibold">Drag and drop files here</h3>
        <p className="text-base-content/70 mt-2">
          Upload PDF, DOCX, PPT, PPTX, or TXT files
        </p>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
        >
          Choose Files
        </button>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleChange}
          accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body">
            <h4 className="font-semibold">Selected Files</h4>
            <div className="space-y-2">
              {selectedFiles.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between rounded-lg bg-base-200 px-3 py-2"
                >
                  <span className="truncate">{file.name}</span>
                  <span className="text-sm text-base-content/60">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              ))}
            </div>

            <div className="card-actions justify-end mt-2">
              <button className="btn btn-primary">Upload Files</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UplaodDropzone;
