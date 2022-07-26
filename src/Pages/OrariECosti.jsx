import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Divider from '@mui/material/Divider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery';

export default function OrariECosti() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px' }}>
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">
                        Il Museo è aperto dal martedì alla domenica con orario continuato dalle 10 alle 17.30 (ultimo ingresso ore 17.00).
<br />

L'accesso, gratuito, avverrà esclusivamente con la mascherina.
<br />
<span style={{color: '#b33030'}}>Per i gruppi:</span>
<br />

Attualmente l'accesso alle sale museali è consentito a un massimo di 15 persone per sala ogni quarto d'ora.
<br />

Per garantire l'ingresso ai gruppi, a causa del contingentamento e del percorso espositivo caratterizzato dall'alternanza di sale con capienze differenti, sono ammesse un massimo di 15 persone alla volta + la guida tramite prenotazione obbligatoria gratuita sulla piattaforma https://museicivicimilano.vivaticket.it.

<br />
Qualora il gruppo fosse più numeroso, è possibile prenotare due slot consecutive.
<br />
<span style={{color: '#b33030'}}>Come raggiungerci:</span>

<br />
Via Borgonuovo, 23 - 20121 Milano 
<br />
Mezzi di trasporto: 
<br />
M2 Lanza, M3 Montenapoleone 
<br />
Tram 1 Bus 94, 61, 43
<br />

<span style={{color: '#b33030'}}>Contatti:</span>
<br />
Tel. 02 884 64173
<br />
Fax 02 884 64181
<br />
email: c.museorisorgimento@comune.milano.it
<br />

<span style={{color: '#b33030'}}>Accessibilità alla struttura</span>
<br />
Il museo dispone di una rampa di accesso per i disabili di servizi igienici attrezzati.
<br />

<span style={{color: '#b33030'}}>Visite guidate:</span>
<br />
Il Museo organizza visite guidate su richiesta.
<br />

Info 
<br />
Visite al Museo del Risorgimento: 
tel. 02 884 64175 / 64194 Fax 02 884 42165

<br />
ed.scuoledidatticaraccoltestoriche@comune.milano.it


 

 
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
                        Il Museo è aperto dal martedì alla domenica con orario continuato dalle 10 alle 17.30 (ultimo ingresso ore 17.00).
<br />

L'accesso, gratuito, avverrà esclusivamente con la mascherina.
<br />
<span style={{color: '#b33030'}}>Per i gruppi:</span>
<br />

Attualmente l'accesso alle sale museali è consentito a un massimo di 15 persone per sala ogni quarto d'ora.
<br />

Per garantire l'ingresso ai gruppi, a causa del contingentamento e del percorso espositivo caratterizzato dall'alternanza di sale con capienze differenti, sono ammesse un massimo di 15 persone alla volta + la guida tramite prenotazione obbligatoria gratuita sulla piattaforma https://museicivicimilano.vivaticket.it.

<br />
Qualora il gruppo fosse più numeroso, è possibile prenotare due slot consecutive.
<br />
<span style={{color: '#b33030'}}>Come raggiungerci:</span>

<br />
Via Borgonuovo, 23 - 20121 Milano 
<br />
Mezzi di trasporto: 
<br />
M2 Lanza, M3 Montenapoleone 
<br />
Tram 1 Bus 94, 61, 43
<br />

<span style={{color: '#b33030'}}>Contatti:</span>
<br />
Tel. 02 884 64173
<br />
Fax 02 884 64181
<br />
email: c.museorisorgimento@comune.milano.it
<br />

<span style={{color: '#b33030'}}>Accessibilità alla struttura</span>
<br />
Il museo dispone di una rampa di accesso per i disabili di servizi igienici attrezzati.
<br />

<span style={{color: '#b33030'}}>Visite guidate:</span>
<br />
Il Museo organizza visite guidate su richiesta.
<br />

Info 
<br />
Visite al Museo del Risorgimento: 
tel. 02 884 64175 / 64194 Fax 02 884 42165

<br />
ed.scuoledidatticaraccoltestoriche@comune.milano.it


 

 
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