import * as React from 'react';
import Copyright from "./copyright";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Deposits from "./Dashboard/deposits";
import Chart from "./Dashboard/chart";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export default function Orders() {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Typography>
                left blank for orders
            </Typography>
            <Copyright />
        </Box>
    )
}