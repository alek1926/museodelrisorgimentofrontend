import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Divider from '@mui/material/Divider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import amichae from '../images/amichae.jpg';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery';

export default function Amichae() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px' }}>
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4"><img src={amichae} width="600"></img></Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">
                        L’Associazione Milano Cultura Heritage Arte ed Educazione nasce per il sostegno delle Civiche Raccolte Storiche ed è l’associazione degli Amici di Palazzo Morando e di Palazzo Moriggia.

                        <br />
Si propone innanzitutto di far conoscere, anche a livello internazionale, il grande patrimonio artistico e culturale di Milano, in particolare promuovendo acquisizioni, restauri, donazioni e interventi specifici sulla base delle necessità dei due Musei.

<br />
Altro obiettivo è quello di creare un gruppo di appassionati d’arte che, attorno a un calendario di appuntamenti e incontri, conferenze, proiezioni e mostre, seguano un vero percorso educativo capace di sancire la continuità tra passato e futuro. Un programma che permette ai membri dell’Associazione di instaurare un fervido colloquio e confronto con le istituzioni e i direttori dei musei, gli artisti e le loro performance, i critici e gli storici, i galleristi e i curatori, nazionali ed esteri.

<br />
Le conferenze organizzate da Amichae sono aperte al pubblico con entrata libera fino a esaurimento posti disponibili.
<br />

<br />
Iscrizione newsletter per ricevere gli inviti: martina.loi@comune.milano.it.


 

 
<br />
Info
chiara(at)amichae.org

                    </Typography></Grid>
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
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">
                        L’Associazione Milano Cultura Heritage Arte ed Educazione nasce per il sostegno delle Civiche Raccolte Storiche ed è l’associazione degli Amici di Palazzo Morando e di Palazzo Moriggia.

                        <br />
Si propone innanzitutto di far conoscere, anche a livello internazionale, il grande patrimonio artistico e culturale di Milano, in particolare promuovendo acquisizioni, restauri, donazioni e interventi specifici sulla base delle necessità dei due Musei.

<br />
Altro obiettivo è quello di creare un gruppo di appassionati d’arte che, attorno a un calendario di appuntamenti e incontri, conferenze, proiezioni e mostre, seguano un vero percorso educativo capace di sancire la continuità tra passato e futuro. Un programma che permette ai membri dell’Associazione di instaurare un fervido colloquio e confronto con le istituzioni e i direttori dei musei, gli artisti e le loro performance, i critici e gli storici, i galleristi e i curatori, nazionali ed esteri.

<br />
Le conferenze organizzate da Amichae sono aperte al pubblico con entrata libera fino a esaurimento posti disponibili.
<br />

<br />
Iscrizione newsletter per ricevere gli inviti: martina.loi@comune.milano.it.


 

 
<br />
Info
chiara(at)amichae.org

                    </Typography></Grid>
                    </Grid>
                </Grid>
            <Footer></Footer>
            </>
        )
    }
}