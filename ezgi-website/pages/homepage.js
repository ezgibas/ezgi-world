import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const centeredStyles = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0",
};

function Greeting(props) {
  return (
    <div>
      <h1>Hi!!</h1>
      <h2>ur mom</h2>
    </div>
  );
}

function MakePaper(props) {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper rounded="true" elevation={2}>
        <div>
          <h3>{props.text}</h3>
        </div>
      </Paper>
    </Box>
  );
}

export default function HomePage() {
  return (
    <div style={centeredStyles}>
      <div>
        <Greeting></Greeting>
        <MakePaper text="this is some card text" />
      </div>
    </div>
  );
}
