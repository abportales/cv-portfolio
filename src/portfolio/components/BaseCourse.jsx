
export const BaseCourse = ({
    name,
    institution,
    duration,
}) => {
  return (
    <>
        <p><span>Nombre:</span> {name} </p>
        <p><span>Institución:</span> {institution} </p>
        <p><span>Duración:</span> {duration} </p>
        <hr />
    </>
  )
}
