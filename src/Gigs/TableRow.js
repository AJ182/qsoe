import React from 'react';
import './gigTable.css';

const TableRow = ({ gig }) => {

    return (
        <tr  className="gigTable__tr">
            <td className="gigTable__td">
                {gig.venue}
            </td>
            <td className="gigTable__td">
                {gig.date}
            </td>
            <td className="gigTable__td">
                {gig.address}
            </td>
            <td className="gigTable__td">
                {gig.notes}
            </td>
        </tr>
    );
}

export default TableRow;
