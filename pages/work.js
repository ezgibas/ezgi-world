import styles from '../styles/Index.module.css'
import CustomAccordion from '../components/ui/CustomAccordion';
import Resource from "../components/ui/Resource"


export default function WorkPage() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header} />
      </header>
      <main className={styles.main}>
        <h1>Work</h1>
        <Resource name={"Resume"} href="../../public/BasEzgi_Resume.pdf"></Resource>
        <div className={styles.textContainer}>
        <CustomAccordion title={"Software Engineering"} text={"some epic text some epic textsome epic text some epic textsome epic text some epic text  "}/>
        </div>
      </main>
    </div>
  )
}

