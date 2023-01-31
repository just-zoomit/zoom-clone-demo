const timeOptions = { hour: "2-digit", minute: "2-digit" };
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const element = (
  <div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{new Date().toLocaleTimeString([], timeOptions)}</h1>
      <h2>{new Date().toLocaleDateString("en-us", dateOptions)}</h2>
    </div>
  </div>
);
