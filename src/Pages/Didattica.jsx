import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Divider from '@mui/material/Divider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import didattica from '../images/didattica.jpg';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery';

export default function Didattica() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px' }}>
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4">Attività Didattiche</Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">Al Museo del Risorgimento è attiva dal gennaio 2000 una Sezione Didattica le cui proposte mirano a trasformare la visita al Museo in un’esperienza emozionante, che fa nascere il desiderio di approfondire e ampliare le tematiche incontrate senza ridurla a una lezione di storia o trasformandola in una verifica d’apprendimento.

                    La visita alle sale può essere condotta dal personale della Sezione o gestita dall’insegnante.
                    La guida alle visite dei giovani è caratterizzata da una comunicazione non frontale che, con quesiti e curiosità, coinvolge anche gli studenti meno preparati; i contenuti si fondano sulla loro esperienza e rimandano ad argomenti di attualità; tiene conto dei tempi di attenzione; utilizza un linguaggio dalla struttura semplice, ma con un lessico scientificamente corretto.
                    <br />
                    Prenotazioni e informazioni: tel. 02.884 64175 / 64194
                        <br />

                    fax 02.884.42165
                        <br />
                    mail: ed.scuoledidatticaraccoltestoriche(at)comune.milano.it


                    </Typography></Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                        <Grid item xs={6} sx={{ marginTop: '20px' }}><img src={didattica} width="200"></img></Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    )}else{
        return(
            <>
            <Navbar></Navbar>
            <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4">Attività Didattiche</Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black', fontSize: 14 }} variant="p">Al Museo del Risorgimento è attiva dal gennaio 2000 una Sezione Didattica le cui proposte mirano a trasformare la visita al Museo in un’esperienza emozionante, che fa nascere il desiderio di approfondire e ampliare le tematiche incontrate senza ridurla a una lezione di storia o trasformandola in una verifica d’apprendimento.

                    La visita alle sale può essere condotta dal personale della Sezione o gestita dall’insegnante.
                    La guida alle visite dei giovani è caratterizzata da una comunicazione non frontale che, con quesiti e curiosità, coinvolge anche gli studenti meno preparati; i contenuti si fondano sulla loro esperienza e rimandano ad argomenti di attualità; tiene conto dei tempi di attenzione; utilizza un linguaggio dalla struttura semplice, ma con un lessico scientificamente corretto.
                    <br />
                    Prenotazioni e informazioni: tel. 02.884 64175 / 64194
                        <br />

                    fax 02.884.42165
                        <br />
                    mail: ed.scuoledidatticaraccoltestoriche(at)comune.milano.it


                    </Typography></Grid>
                    </Grid>
                </Grid>
            <Footer></Footer>
            </>
        )
    }
}