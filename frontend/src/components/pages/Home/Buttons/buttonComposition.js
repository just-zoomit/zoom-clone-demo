import { HoverButton} from "../Table/TableComponents";

// Adpoted Component Composition pattern, parent component of GenericPopModal
// Convert to styled component
export const Button = ({ size, color, text, label, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HoverButton
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
        <span style={{fontSize: "55px" }} class="material-icons md-55"> {text} </span>
      </HoverButton>

      <p> {label}</p>
    </div>
  );
};

export const OrangeButton = (props) => {
  return <Button {...props} color="#faa92f" />;
};

export const BlueButton = (props) => {
  return <Button {...props} color="#316efd" size="large" />;
};
