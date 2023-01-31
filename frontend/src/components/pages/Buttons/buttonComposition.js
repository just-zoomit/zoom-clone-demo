import "../Dialogs/styles.css";

// Adpoted Component Composition pattern, parent component of GenericPopModal
// Convert to styled component
export const Button = ({ size, color, text, label, ...props }) => {
  return (
    <div>
      <button
        className="bn37"
        style={{
          padding: "0",
          frontSize: size === "large" ? "32px" : "16px",
          background: "#316efd",
          backgroundColor: color,
          display: "grid",
          placeItems: "center",
          borderRadius: "25px",
          width: "100px",
          height: "100px",
          lineHeight: "100px",
          color: "white",
          transition: "transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95)",
        }}
        {...props}
      >
        <i class="material-icons large icon-blue md40px"> {text} </i>
      </button>
      <p  style={{
          alignItems: "center",
          
        }}> {label}</p>
    </div>
  );
};


export const DangerBlueButton = (props) => {
  return <Button {...props} color="#faa92f" />;
};

export const BigSuccessButton = (props) => {
  return <Button {...props} color="#316efd" size="large" />;
};
