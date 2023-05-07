import styles from './ItemList.module.css'

export function ItemList({ full_name, index }) {
  return (
    //probar con useEffect
    <>
      {index % 2 == 0 || index == 0 ? (
        <li className={styles.colorPar}>{full_name}</li>
      ) : (
        <li className={styles.colorInpar}>{full_name}</li>
      )}
    </>
  )
}
