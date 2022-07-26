import * as React from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';
import {Typography, useMediaQuery, AppBar, Toolbar, IconButton} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Menu } from '@mui/icons-material'

export default function Footer() {
    const axios = require('axios');
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    let [nome, setNome] = React.useState('');
    let [email, setEmail] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let handlePost = () => {
        handleOpen();
        axios.post('http://localhost:9192/add', {
            nome: nome,
            email: email
        })
            .then(res => {
                console.log(res);
            })
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
            color: 'white'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                color: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'white',
                color: 'white'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                color: 'white'
            },
        },
    });
if(!xs){
    return (
        <>
            <footer style={{ backgroundColor: '#b33030', color: 'white', height: "200px"}}>
                <Grid container direction="row" sx={{ paddingTop: '20px' }}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}><a>Privacy & copyright </a></Grid>
                    <Grid item xs={6}>Museo del Risorgimento, via Borgonuovo 23, 20121 Milano, 02 884 64177 / 64173</Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ marginTop: '50px' }}>
                            <Grid item xs={3} >
                                <TextField label="Nome" variant="outlined" onChange={(e) => setNome(e.target.value)} sx={{ input: { color: 'white' }, fieldset: {borderColor: 'white'}}} fullWidth />
                            </Grid>
                            <Grid item xs={3} >
                                <TextField label="E-mail" variant="outlined" sx={{ color: 'white', input: { color: 'white' }, fieldset: {borderColor: 'white'}}} onChange={(e) => setEmail(e.target.value)} fullWidth />
                            </Grid>
                            <Grid item xs={3} sx={{ marginLeft: 5 }}><Button variant="contained" color="error" onClick={handlePost}>Iscriviti alla newsletter!</Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{color: '#b33030'}}>
                        Ciao, {nome}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Grazie per esserti iscritto alla newsletter! <br />
                        ti invieremo tutte le novità via e-mail a <span style={{color: '#b33030'}}>{email}</span>.
                    </Typography>
                </Box>
            </Modal>
        </>
    )}else{
        return(
            <footer>
                <AppBar position="sticky" color="inherit">
                  <Toolbar>
                    <Typography variant="p">
                    <Grid container direction="row" sx={{ paddingTop: '20px' }}>
                    <Grid item xs={3}><a>Privacy & copyright </a></Grid>
                    <Grid item xs={9}>Museo del Risorgimento, via Borgonuovo 23, 20121 Milano, 02 884 64177 / 64173</Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ marginTop: '50px' }}>
                            <Grid item xs={6} >
                                <TextField label="Nome" variant="outlined" onChange={(e) => setNome(e.target.value)} sx={{ input: { color: 'white' }, fieldset: {borderColor: 'white'}}} fullWidth />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField label="E-mail" variant="outlined" sx={{ color: 'white', input: { color: 'white' }, fieldset: {borderColor: 'white'}}} onChange={(e) => setEmail(e.target.value)} fullWidth />
                            </Grid>
                            <Grid item xs={12} sx={{ marginLeft: 5 }}><Button variant="contained" color="error" onClick={handlePost}>Iscriviti alla newsletter!</Button></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                    </Typography>
                  </Toolbar>
                </AppBar>
            </footer>
        )
    }
}