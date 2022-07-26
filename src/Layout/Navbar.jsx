import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import Logo from '../Components/Logo'
import Logo150 from '../Components/Logo150'
import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import {Typography, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
        <AppBar position="sticky-top" color="primary" style={{ backgroundColor: 'white', fontSize: '34px' }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={2.5}><Link to="/">
                    <Button><Logo></Logo></Button>
                    </Link>  </Grid>
                <Grid item xs={3.3} style={{color: '#b33030'}}>Museo del Risorgimento</Grid>
                <Grid item xs={3.5}><Logo150 /></Grid>
            </Grid>
            </AppBar>
        <AppBar position="sticky" color="primary" height="50px" style={{ backgroundColor: '#b33030', fontSize: '14px' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={1.5}><Link to="/istituzione" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}>L'istituzione</Typography></Link></Grid>
                <Grid item xs={1.5}><Link to="/museo" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}><p>Il Museo</p></Typography></Link></Grid>
                <Grid item xs={1.5}><Link to="/didattica" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}><p>Didattica</p></Typography></Link></Grid>
                <Grid item xs={1.5}><Link to="/amichae" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}><p>Amichae</p></Typography></Link></Grid>
                <Grid item xs={1.5}><Link to="/orariecosti" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}><p>Orari e Costi</p></Typography></Link></Grid>
                <Grid item xs={1.5}><Link to="/brochure" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}><p>Brochure</p></Typography></Link></Grid>
                <Grid item xs={1.5}><Link to="/cartadeiservizi" style={{ textDecoration: 'none' }} ><Typography variant="p" style={{color: 'white'}}><p>Carta dei Servizi</p></Typography></Link></Grid>
            </Grid>
        </AppBar>
        </>
    )
}else{
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,  color: 'black' }}>
            </Typography>
            <Button color="inherit"><Logo></Logo></Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}
} 