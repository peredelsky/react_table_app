import { observer } from "mobx-react-lite";

function Table({visibleData}) {
    return (
        <>
          <table>
            <thead>
              <tr>
                <td>
                  Date
                </td>
                <td>
                  Label
                </td>
                <td>
                  Quantity
                </td>
                <td>
                  Distance / km
                </td>
              </tr>
            </thead>

            <tbody>
                {visibleData.map(el => ( 
                <tr key={el.id}>
                    <td>{new Date(el.date).toLocaleDateString('en-uk', { year:"numeric", month:"numeric", day:"numeric"})}</td>
                    {/* <td>{String(el.date).slice(10)}</td> // Другой способ */}
                    <td>{el.label}</td>
                    <td>{el.quantity}</td>
                    <td>{el.distance}</td>
                </tr> 
                ))}
            </tbody>
          </table>
        </>
    )
}

export default observer(Table);
