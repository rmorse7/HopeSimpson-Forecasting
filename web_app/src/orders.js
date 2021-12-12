import * as React from 'react';
import Copyright from "./copyright";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import tableau from 'tableau-api';
import {Component} from "react";

class Orders extends Component{
    componentDidMount() {
        this.initViz()
    }

    initViz() {
        const vizUrl = 'https://prod-useast-b.online.tableau.com/t/minghaoweb/views/TexasDataDailyVisualize/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }

    render(){
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
                <div ref={(div) => {
                    this.vizContainer = div
                }}/>
                <Copyright />
            </Box>
        )
    }
}

export default Orders;