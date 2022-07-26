import Grid from '@mui/material/Grid';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function CartaDeiServizi() {

    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px', marginBottom: '380px'}}>
                <a href="http://www.museodelrisorgimento.mi.it/fileadmin/risorgimento/Carta_dei_servizi/Palazzo_Moriggia_Carta_dei_Servizi_7-6-22.pdf">Carta dei Servizi - Palazo Morriggia</a>
            </Grid>
            <Footer></Footer>
        </>
    )
}