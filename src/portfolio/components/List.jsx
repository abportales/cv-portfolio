export const List = ({ list }) => {
    console.log({list})
    return (
        <ul>
            {
                list.map((item) => (<li key={item.id} >{item.p}</li>))
            }
        </ul>
    )
}
