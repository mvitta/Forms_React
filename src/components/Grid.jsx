import styles from './Grid.module.css'

export function Grid() {
  const justifySelf = ['right', 'left']
  const randomIndex = () => {
    return Math.floor(Math.random() * 2)
  }

  return (
    <>
      <div className={styles.container}>
        {new Array(8).fill(<div></div>).map((value, index) => {
          return (
            <div
              key={crypto.randomUUID()}
              className={`${styles.item} ${styles[`item-${index + 1}`]}`}
            >
              item {index + 1}
            </div>
          )
        })}
      </div>

      <div className={styles.divisions}>
        <div className={styles['itemGrid1']}>
          <div className={styles['container-flex']}>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-1']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-2']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-3']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-4']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-5']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-6']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-7']}`}
            ></div>
            <div
              className={`${styles['item-flex']} ${styles['item-flex-8']}`}
            ></div>
          </div>
        </div>
        <div className={styles['itemGrid2']}>Nav</div>
        <div className={styles['itemGrid3']}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            dolorum cumque expedita delectus assumenda accusantium, quisquam hic
            autem necessitatibus aliquid, atque, ipsam corrupti error facilis.
            Molestiae aperiam odio ipsa cum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            dolorum cumque expedita delectus assumenda accusantium, quisquam hic
            autem necessitatibus aliquid, atque, ipsam corrupti error facilis.
            Molestiae aperiam odio ipsa cum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            dolorum cumque expedita delectus assumenda accusantium, quisquam hic
            autem necessitatibus aliquid, atque, ipsam corrupti error facilis.
            Molestiae aperiam odio ipsa cum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            dolorum cumque expedita delectus assumenda accusantium, quisquam hic
            autem necessitatibus aliquid, atque, ipsam corrupti error facilis.
            Molestiae aperiam odio ipsa cum!
          </p>
        </div>
      </div>
    </>
  )
}
