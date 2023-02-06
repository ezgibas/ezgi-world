import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Link from "next/link";
import { width } from "@mui/system";
import { lightBlue } from "@mui/material/colors";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
       <title>website</title>
      </Head>
      <header>
        <div className={styles.header}/>
          hey heyyy
      </header>
      <main className={styles.main}>
      <div className="intro">
        <div className="egg image">
        <img src="/pics/egg.jpg" alt="a smiling egg plushie" placeholder="blur" width={100}/>
        </div>        
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
      </main>
      <footer className={styles.footer}>
        feet
      </footer>
    </div>
  )
}

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