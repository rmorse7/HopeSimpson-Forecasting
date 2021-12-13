import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../title';
import Prediction from "../prediction";

// Generate Order Data
function createData(id, date, region, cases) {
    return { id, date, region, cases};
}

const rows = [
    createData(
        0,
        getDate(),
        'Harris County',
        'TBD',
    ),
    createData(
        1,
        getDate(),
        'Dallas County',
        'TBD',
    ),
    createData(
        2,
        getDate(),
        'Tarrant County',
        'TBD',
    ),
    createData(
        3,
        getDate(),
        'Bexar County',
        'TBD',
    ),
    createData(
        4,
        getDate(),
        'Travis County',
        'TBD',
    ),
];

function getDate() {
    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
}

export default function Region({setPage, setPageName}) {
    const changeToPrediction = () => {
        setPage(<Prediction />);
        setPageName('Prediction');
    }

    return (
        <React.Fragment>
            <Title>Region Forecasting</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Region</TableCell>
                        <TableCell>Cases</TableCell>
                        {/*<TableCell>Payment Method</TableCell>*/}
                        {/*<TableCell align="right">Sale Amount</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.region}</TableCell>
                            <TableCell>{row.cases}</TableCell>
                            {/*<TableCell>{row.paymentMethod}</TableCell>*/}
                            {/*<TableCell align="right">{`$${row.amount}`}</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" sx={{ mt: 3 }} onClick={changeToPrediction}>
                See more prediction
            </Link>
        </React.Fragment>
    );
}