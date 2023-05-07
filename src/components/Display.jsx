import styles from './Display.module.css'

export function Display({ display }) {
  return (
    <>
      <section className={styles.display}>
        <pre>
          <code>{JSON.stringify(display)}</code>
        </pre>
      </section>
    </>
  )
}
