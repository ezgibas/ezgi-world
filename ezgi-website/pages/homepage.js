import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { width } from "@mui/system";
import { lightBlue } from "@mui/material/colors";

const cardStyle = {};

function Greeting(props) {
  return <div></div>;
}

function MakePaper(props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Paper rounded="true" elevation={2} className={styles.card}>
        <div>{props.contents}</div>
      </Paper>
    </Box>
  );
}

export default function HomePage() {
  return (
    <div className={styles.defaultCentered}>
      <div>
        <h1>Hi, I'm Ezgi.</h1>
        <h2>What are you here to do?</h2>
        <div style={{ display: "flex" }}>
          <MakePaper
            contents={
              <h3>
                {" "}
                <Link href="./party">
                  <a>party</a>
                </Link>
              </h3>
            }
          />

          <MakePaper
            contents={
              <h3>
                {" "}
                <Link href="./business">
                  <a>business </a>
                </Link>
              </h3>
            }
          ></MakePaper>
        </div>
      </div>
    </div>
  );
}
