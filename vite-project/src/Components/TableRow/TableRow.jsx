import "./TableRow.css";

function TableRow({ name, skillSet, votes, className }) {
    return (
        <tr className={className}>
            <td>{name}</td>
            <td>{skillSet}</td>
            <td>{votes}</td>
        </tr>
    )
}

export default TableRow;