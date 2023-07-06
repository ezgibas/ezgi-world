import styles from '../styles/Index.module.css'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PinkButton from "../public/ui/PinkButton"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="intro">
          <div>
            <div>
              <h1 id={styles.headerName}>ezgi</h1>
              <a id={styles.headerDom} href="/">.world</a>
            </div>
            <div class={styles.defaultCentered}>
              <PinkButton text="About Me" href="/party" />
              <PinkButton text="Projects" />
              <PinkButton text="See More" />
            </div>
            <a href="/party">
              <p>© Ezgi Baş 2023</p>
            </a>
          </div>
        </div>
      </main>

    </div>
  )
}