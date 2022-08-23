export const List = ({ list }) => {

    return (
        <>
            {
                list.map((item) => (
                    <li key={item.id} >{item.p}</li>
                    // <p key={item.id} >{item.p}</p>
                ))
            }
        </>
    )
}
