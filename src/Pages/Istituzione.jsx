import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Divider from '@mui/material/Divider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import sede from '../images/Sede.jpg';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery';

export default function Istituzione() {

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px' }}>
                <Grid item xs={0.6}></Grid>
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4">Informazioni Istituzionali</Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">Il <span style={{color: '#b33030'}}>Museo del Risorgimento</span> ebbe origine nel 1884 dalla volontà dei milanesi di inviare all’esposizione Generale Italiana di Torino una raccolta di testimonianze relative all’epopea risorgimentale. Chiusa la mostra, i materiali trovarono una prima sistemazione nel Salone dei Giardini Pubblici (ex Convento delle Carcanine) per essere poi trasferiti nel 1896 al Castello Sforzesco. Oggi il Museo ha sede nel settecentesco Palazzo Moriggia, progettato nel 1755 da Giuseppe Piermarini a ridosso del vasto complesso di Brera. Fin dalla nascita il Museo si presentò come una istituzione in grado di affiancare ai compiti di tutela della memoria e di costruzione dell'identità nazionale che gli erano propri il ruolo di istituto impegnato nel campo della ricerca grazie all'organizzazione di una biblioteca e di un archivio, che sono oggi tra i più importanti in Italia per lo studio della storia nazionale recente. Questi compiti connotano ancora oggi la sua presenza nel panorama degli istituti culturali cittadini.
                        </Typography></Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={6}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><img src={sede} width="300"></img></Grid>
                        <Grid item xs={6}><Typography sx={{ color: '#b33030'}} variant="h5">La nostra Sede</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    )}else{
        return(<>
        <Navbar></Navbar>
        <Grid item xs={0.6}></Grid>
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4">Informazioni Istituzionali</Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">Il <span style={{color: '#b33030'}}>Museo del Risorgimento</span> ebbe origine nel 1884 dalla volontà dei milanesi di inviare all’esposizione Generale Italiana di Torino una raccolta di testimonianze relative all’epopea risorgimentale. Chiusa la mostra, i materiali trovarono una prima sistemazione nel Salone dei Giardini Pubblici (ex Convento delle Carcanine) per essere poi trasferiti nel 1896 al Castello Sforzesco. Oggi il Museo ha sede nel settecentesco Palazzo Moriggia, progettato nel 1755 da Giuseppe Piermarini a ridosso del vasto complesso di Brera. Fin dalla nascita il Museo si presentò come una istituzione in grado di affiancare ai compiti di tutela della memoria e di costruzione dell'identità nazionale che gli erano propri il ruolo di istituto impegnato nel campo della ricerca grazie all'organizzazione di una biblioteca e di un archivio, che sono oggi tra i più importanti in Italia per lo studio della storia nazionale recente. Questi compiti connotano ancora oggi la sua presenza nel panorama degli istituti culturali cittadini.
                        </Typography></Grid>
                    </Grid>
                </Grid>
        <Footer></Footer>
        </>)
    }
}