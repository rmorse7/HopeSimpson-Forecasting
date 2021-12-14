import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import Dashboard from "./Dashboard/dashboard";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import History from "./history";
import Prediction from "./prediction";
import HistoricalAnalysis from "./HistoricalAnalysis/historicalAnalysis";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const [divOpen, setDivOpen] = React.useState(true);
    const [page, setPage] = React.useState();
    const [pageName, setPageName] = React.useState('Dashboard');
    const toggleDrawer = async () => {
        setOpen(!open);
        if(!open) {
            await sleep(165);
        }
        setDivOpen(!divOpen);
    };

    const changeToDash = () => {
      setPage(<Dashboard setPage={setPage} setPageName={setPageName} />);
      setPageName('Dashboard');
    }

    const changeToHistory = () => {
        setPage(<History />);
        setPageName('History');
    }

    const changeToPrediction = () => {
      setPage(<Prediction />);
      setPageName('Prediction');
    }

    const changeToHistoricalAnalysis = () => {
        setPage(<HistoricalAnalysis />);
        setPageName('Historical Analysis by Ricky Morse');
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            {pageName}
                        </Typography>
                        {/*<IconButton color="inherit">*/}
                        {/*    <Badge badgeContent={4} color="secondary">*/}
                        {/*        <NotificationsIcon />*/}
                        {/*    </Badge>*/}
                        {/*</IconButton>*/}
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: [1],
                        }}
                    >
                        {divOpen && <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <CoronavirusOutlinedIcon sx={{ margin: 1 }} />
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                sx={{ flexGrow: 1 }}
                            >
                                HS Forecast
                            </Typography>
                        </div>}
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>
                        <div>
                            <ListItem button onClick={changeToDash}>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button onClick={changeToPrediction}>
                                <ListItemIcon>
                                    <OnlinePredictionOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Prediction" />
                            </ListItem>
                            <ListItem button onClick={changeToHistory}>
                                <ListItemIcon>
                                    <HistoryOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="History" />
                            </ListItem>
                            <ListItem button onClick={changeToHistoricalAnalysis}>
                                <ListItemIcon>
                                    <AnalyticsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Historical Analysis" />
                            </ListItem>
                            {/*<ListItem button>*/}
                            {/*    <ListItemIcon>*/}
                            {/*        <LayersIcon />*/}
                            {/*    </ListItemIcon>*/}
                            {/*    <ListItemText primary="Integrations" />*/}
                            {/*</ListItem>*/}
                        </div>
                    </List>
                    {/*<Divider />*/}
                    {/*<List>*/}
                    {/*    <div>*/}
                    {/*        <ListSubheader inset>Saved reports</ListSubheader>*/}
                    {/*        <ListItem button>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                <AssignmentIcon />*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary="Current month" />*/}
                    {/*        </ListItem>*/}
                    {/*        <ListItem button>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                <AssignmentIcon />*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary="Last quarter" />*/}
                    {/*        </ListItem>*/}
                    {/*        <ListItem button>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                <AssignmentIcon />*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary="Year-end sale" />*/}
                    {/*        </ListItem>*/}
                    {/*    </div>*/}
                    {/*</List>*/}
                </Drawer>
                {page? page : <Dashboard setPage={setPage} setPageName={setPageName} />}
            </Box>
        </ThemeProvider>
    );
}

export default function App() {
    return <DashboardContent />;
}