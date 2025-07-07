import React from "react";

export default function CustomerSegmentation() {
  return (
    <div
      style={{
        height: "500vh", // Updated from 87vh to 100vh
        width: "96%",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <iframe
        title="Looker Studio Report"
        src="https://lookerstudio.google.com/embed/reporting/9d8f1093-4903-42ec-8819-6c3f9b87f3b6/page/p_991tvcu4td"
        width="100%"
        height="100%"
        style={{
          border: "none",
          backgroundColor: "#000000",
          display: "block",
          overflow: "auto",
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
}
