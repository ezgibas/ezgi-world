import styles from '../styles/Index.module.css'
import PinkButton from "../components/ui/PinkButton"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="intro">
          <div>
            <div className={styles.defaultCentered}>
              <h1 id={styles.headerName}>ezgi</h1>
              <a id={styles.headerDom} href="/">.world</a>
            </div>
            <div class={styles.defaultCentered}>
              <PinkButton text="About Me" href="/about" />
              <PinkButton text="Work" href="/work" />
              <PinkButton text="More" href="/more" />
            </div>
            <a href="/party">
              <p style={{ "fontFamily": "'Press Start 2P', cursive" }}>© Ezgi Baş 2025</p>
            </a>
          </div>
        </div>
      </main>

    </div>
  )
}