import React from "react";

const DocumentCard = ({
  name = "Untitled Document",
  type = "PDF",
  status = "Ready",
  size = "0 KB",
  uploadedAt = "Just now",
}) => {
  const badgeClass =
    status === "Ready"
      ? "badge-success"
      : status === "Processing"
        ? "badge-warning"
        : "badge-error";
  return (
    <div className="card bg-base-100 shadow-md border border-base-300 hover:shadow-lg transition-all duration-200">
      <div className="card-body">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="card-title text-lg truncate">{name}</h3>
            <p className="text-sm text-base-content/60">
              {type} • {size}
            </p>
            <p className="text-xs text-base-content/50 mt-1">
              Uploaded {uploadedAt}
            </p>
          </div>

          <div className={`badge ${badgeClass}`}>{status}</div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
