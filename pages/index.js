import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PinkButton from "../public/ui/PinkButton"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>website</title>
      </Head>
      <header>
        <div className={styles.header} />
      </header>
      <main className={styles.main}>
        <div className="intro" style={{ display: "flex" }}>
          <div className="egg image" style={{ margin: 10 }}>
            <img src="/pics/egg.jpg" alt="a smiling egg plushie" placeholder="blur" width={200} />
          </div>
          <div className="intro text">
            <PinkButton text="Button 1"></PinkButton>
            <h1>Hi, I'm Ezgi.</h1>

          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        hey! this website is in progress! hopefully it will be super cool when it's done!
      </footer>
    </div>
  )
}


function Greeting(props) {
  return <div></div>;
}

function MakePaper(props) {
  return (
    <div>
      <Box
        style={
          {
            display: "flex"
          }}>
        <Paper rounded="true" elevation={2} className={styles.card} >
          <div>{props.contents}</div>
        </Paper>
      </Box>
      <div style={{
        display: "block",
        paddingBottom: '100%',
      }} />
    </div>
  );
}