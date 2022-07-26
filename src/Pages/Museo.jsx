import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Divider from '@mui/material/Divider';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import cortile from '../images/cortile.jpg';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery';

export default function Museo() {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px' }}>
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4">Il Museo</Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">Il <span style={{color: '#b33030'}}>Museo del Risorgimento</span> ha sede a <span style={{color: '#b33030'}}>Palazzo Moriggia</span>, in via Borgonuovo, conosciuta anche come "contrada dei nobili" per la presenza di molte importanti dimore sei-settecentesche.


                    Il Palazzo, progettato nel 1775 da Giuseppe Piermarini su incarico del marchese Giovanni Battista Moriggia, fu sede in epoca napoleonica del Ministero degli Esteri e in seguito del Ministero della Guerra.


                    Divenne poi residenza della famiglia De Marchi, che successivamente lo donò al Comune di Milano per destinarlo a sede culturale e museale.

                    A questo link puoi consultare il database in continuo aggiornamento della collezione del Museo del Risorgimento.

                    </Typography></Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={5}>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                        <Grid item xs={6} sx={{ marginTop: '100px' }}><img src={cortile} width="400"></img></Grid>
                        <Grid item xs={2} style={{marginBottom: '20px'}}><Typography sx={{ color: 'black'}} variant="p">Cortile di Palazzo Moriggia con, sullo sfondo, il bronzo <span style={{color: '#b33030'}}>"L'incitamento alle barricate"</span> facente parte del Monumento alle Cinque Giornate di Milano
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
                        <Grid item xs={6}><Typography sx={{ color: '#b33030', marginTop: 5 }} variant="h4">Il Museo</Typography></Grid>
                        <Grid item xs={6} sx={{ marginBottom: '20px' }}><Typography sx={{ color: 'black' }} variant="p">Il <span style={{color: '#b33030'}}>Museo del Risorgimento</span> ha sede a <span style={{color: '#b33030'}}>Palazzo Moriggia</span>, in via Borgonuovo, conosciuta anche come "contrada dei nobili" per la presenza di molte importanti dimore sei-settecentesche.


                    Il Palazzo, progettato nel 1775 da Giuseppe Piermarini su incarico del marchese Giovanni Battista Moriggia, fu sede in epoca napoleonica del Ministero degli Esteri e in seguito del Ministero della Guerra.


                    Divenne poi residenza della famiglia De Marchi, che successivamente lo donò al Comune di Milano per destinarlo a sede culturale e museale.

                    A questo link puoi consultare il database in continuo aggiornamento della collezione del Museo del Risorgimento.

                    </Typography></Grid>
                    </Grid>
                </Grid>
            <Footer></Footer></>
        )
    }
}