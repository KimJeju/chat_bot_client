import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>answer area</div>
        <article className={styles.input_container}>
          <div className={styles.input_area}>
            <input type="text" name="message" placeholder="Send A Message" />
          </div>
        </article>
      </main>
    </div>
  );
}
