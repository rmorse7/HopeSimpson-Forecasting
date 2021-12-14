import {Box, Container, Typography} from "@mui/material";
import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Copyright from "../copyright";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Today from "../Dashboard/today";
import Chart from "../Dashboard/chart";

export default function HistoricalAnalysis() {
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography
                    gutterBottom={true}
                    variant='h5'
                    component='h2'
                    sx={{margin: 3}}
                >
                    Group counties by latitude
                </Typography>
                <img src='tx_countiesedit.png' />
                <img src='Curvecompare-1deg.png' width="60%" height="60%"/>
                <img src='HarrisPrediction.png' width="60%" height="60%"/>
                <img src='Latcompare_1deg.png' width="60%" height="60%"/>
                <img src='Latcompare_all.png' width="60%" height="60%"/>
                <Copyright sx={{ pt: 4 }} />
            </Container>
        </Box>
    )
}