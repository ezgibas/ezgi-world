import styles from '../styles/Index.module.css'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PinkButton from "../public/ui/PinkButton"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="intro" style={{ display: "flex" }}>
          <div className="egg image" style={{ margin: 10 }}>
            <img src="/pics/egg.jpg" alt="a smiling egg plushie" placeholder="blur" width={200} />
          </div>
          <div className="intro text">
            <h1>Hi, I'm Ezgi :)</h1>
            <p>Here's a list of things that I'm currently working on:</p>
            <ul>
              <li>Building this website!</li>
              <li>Learning about traditional Turkish music</li>
              <li>Learning Rust</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        hey! this website is in progress! hopefully it will be super cool when it's done!
      </footer>
    </div>
  )
}