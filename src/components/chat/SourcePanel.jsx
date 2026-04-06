import React from "react";

const SourcePanel = () => {
  const mockSources = [
    {
      id: 1,
      title: "Q1 Financial Report.pdf",
      chunk: "Revenue growth increased by 18% year-over-year.",
    },
    {
      id: 2,
      title: "Product Strategy.docx",
      chunk: "Phase 2 focuses on AI-assisted summarization.",
    },
  ];

  return (
    <div className="card bg-base-100 shadow-md h-full">
      <div className="card-body">
        <h3 className="card-title">Sources</h3>
        <p className="text-sm text-base-content/70 mb-2">
          Retrieved supporting chunks will appear here.
        </p>

        <div className="space-y-3">
          {mockSources.map((source) => (
            <div
              key={source.id}
              className="rounded-xl border border-base-300 bg-base-200 p-3"
            >
              <p className="font-medium text-sm">{source.title}</p>
              <p className="text-xs text-base-content/70 mt-1">
                {source.chunk}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourcePanel;
