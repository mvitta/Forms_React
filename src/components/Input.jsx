export function Input({ name, id, type, onchance, step }) {
  return (
    <>
      <input type={type} name={name} id={id} onChange={onchance} step={step} />
    </>
  )
}
