import React from "react";
import Alert from "react-bootstrap/Alert";

const Impresie = (props) => {
  const stilAlert = {
    color: "#2B2B2B",
    textAlign: "left",
    margin: "10px",
    height: "100px",
    border: "2px solid #F4F4F4",
    padding: "12px",
    borderRadius: "5px",
    boxShadow:
      "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)"
  };

  const stilHead = {
    font: "20px Arial, Helvetica, sans-serif",
    fontWeight: 700
  };
  const { titlu, text } = props; //  Destructurare props
  return (
    <Alert style={stilAlert}>
      <Alert.Heading style={stilHead}>{titlu}</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};

export default Impresie;
