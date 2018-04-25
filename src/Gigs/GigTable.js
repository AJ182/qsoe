import React from 'react';
import TableRow from './TableRow';
import gigData from './gigData.js';
import './gigTable.css';

class GigTable extends React.Component {

    render() {
        return (
            <div>
                <div className="gigTable__tableHeading">
                    Upcoming Live Shows
                </div>
                <table className="gigTable__table">
                    <thead>
                        <tr className="gigTable__tr">
                            <th className="gigTable__th">
                                Venue
                            </th>
                            <th className="gigTable__th">
                                Date
                            </th>
                            <th className="gigTable__th">
                                Address
                            </th>
                            <th className="gigTable__th">
                                Notes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {gigData.map((gig) => (
                            <TableRow gig={gig} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GigTable;
