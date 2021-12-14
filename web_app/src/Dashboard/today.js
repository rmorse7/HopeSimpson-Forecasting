import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../title';

function preventDefault(event) {
    event.preventDefault();
}

function getDate() {
    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    return yourDate.toISOString().split('T')[0]
}

export default function Today() {
    return (
        <React.Fragment>
            <Title>Today's Predicted Cases</Title>
            <Typography component="p" variant="h4">
                21935
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on {getDate()}
            </Typography>
            {/*<div>*/}
            {/*    <Link color="primary" href="#" onClick={preventDefault}>*/}
            {/*        View balance*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </React.Fragment>
    );
}