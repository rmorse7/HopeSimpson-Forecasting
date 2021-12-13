import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{margin: 2}}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.rice.edu/">
                COMP554-HS Forecasting
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}