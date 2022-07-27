import Quadro from '../Components/Quadro';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import  useMediaQuery  from '@mui/material/useMediaQuery';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));
    if(!xs){
    return (
        <>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={3ç}></Grid>
                <Grid item xs={6} sx={{ marginTop: '10px' }}><Quadro></Quadro></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={10}>
                    <Grid container direction="column">
                        <Grid item><Typography sx={{color: '#b33030', marginTop: 5}} variant="h5">BENVENUTO</Typography></Grid>
                        <Grid item xs={3} sx={{ marginTop: 5 }}>
                            <Typography>Nato nel 1885, dal 1951 il museo ha sede nel settecentesco palazzo Moriggia, progettato nel 1775 da Giuseppe Piermarini a ridosso del vasto complesso di Brera. Già sede, in epoca napoleonica, del Ministero degli Esteri e, in seguito, del Ministero della Guerra, il palazzo, passato nel 1900 alla famiglia De Marchi, fu donato al Comune di Milano dalla moglie del celebre naturalista Marco De Marchi e in quell'occasione destinato a sede museale.
                                Attraverso un articolato insieme di materiali composti da stampe, dipinti, sculture, disegni, armi e cimeli, le collezioni illustrano il periodo della storia italiana compreso tra la prima campagna di Napoleone Bonaparte in Italia (1796) e l'annessione di Roma al Regno d'Italia (1870).
                                L'ultimo allestimento risale al 2011 in occasione delle celebrazioni del 150° anniversario dell'Unità d'Italia. Mantenendo intatta la sequenza cronologica, il percorso espositivo, suddiviso in 14 sale, evidenzia i nuclei salienti delle collezioni come, ad esempio, i cimeli dell'incoronazione di Napoleone in Italia (il manto verde e argento e le preziose insegne regali), lo stendardo della Legione Lombarda Cacciatori a cavallo, il primo Tricolore italiano.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} sx={{ marginTop: '25px' }}>
                    <Grid container direction="column" alignItems="flex-start" justifyContent="center">
                        <Grid item xs={1}><Typography sx={{color: '#b33030'}} variant="h6">DOVE SIAMO</Typography></Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={8} sx={{ marginTop: 10 }}>
                            <Typography>Via Borgonuovo, 23 - 20121 Milano
                                MM2 Lanza - MM3 Montenapoleone
                                Tram 1 / Bus 61, 94
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={3} sx={{ marginTop: '20px' }}>
                    <Grid container direction="column">
                        <Grid item><Typography sx={{color: '#b33030'}} variant="h6">ORARI DI APERTURA</Typography></Grid>
                        <Grid item xs={3} sx={{ marginTop: 10 }}>
                            <Typography>da martedì a domenica
                                10.00 - 17.30 (ultimo ingresso ore 17)

                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={3} sx={{ marginTop: '20px' }}>
                    <Grid container direction="column" alignItems="flex-start" justifyContent="center">
                        <Grid item xs={1}><Typography sx={{color: '#b33030'}} variant="h6">CONTATTI</Typography></Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={8} sx={{ marginTop: 10, marginBottom: 5 }}>
                            <Typography>Via Borgonuovo, 23 - 20121 Milano
                                MM2 Lanza - MM3 Montenapoleone
                                Tram 1 / Bus 61, 94
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )}
    else{
        return(
            <>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={10}>
                    <Grid container direction="column">
                        <Grid item><Typography sx={{color: '#b33030', marginTop: 5}} variant="h5">BENVENUTO</Typography></Grid>
                        <Grid item xs={3} sx={{ marginTop: 5 }}>
                            <Typography>Nato nel 1885, dal 1951 il museo ha sede nel settecentesco palazzo Moriggia, progettato nel 1775 da Giuseppe Piermarini a ridosso del vasto complesso di Brera. Già sede, in epoca napoleonica, del Ministero degli Esteri e, in seguito, del Ministero della Guerra, il palazzo, passato nel 1900 alla famiglia De Marchi, fu donato al Comune di Milano dalla moglie del celebre naturalista Marco De Marchi e in quell'occasione destinato a sede museale.
                                Attraverso un articolato insieme di materiali composti da stampe, dipinti, sculture, disegni, armi e cimeli, le collezioni illustrano il periodo della storia italiana compreso tra la prima campagna di Napoleone Bonaparte in Italia (1796) e l'annessione di Roma al Regno d'Italia (1870).
                                L'ultimo allestimento risale al 2011 in occasione delle celebrazioni del 150° anniversario dell'Unità d'Italia. Mantenendo intatta la sequenza cronologica, il percorso espositivo, suddiviso in 14 sale, evidenzia i nuclei salienti delle collezioni come, ad esempio, i cimeli dell'incoronazione di Napoleone in Italia (il manto verde e argento e le preziose insegne regali), lo stendardo della Legione Lombarda Cacciatori a cavallo, il primo Tricolore italiano.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} sx={{ marginTop: '10px' }}>
                    <Grid container direction="column" alignItems="flex-start" justifyContent="center">
                        <Grid item xs={1}><Typography sx={{color: '#b33030'}} variant="p">DOVE SIAMO</Typography></Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={8} sx={{ marginTop: 0 }}>
                            <Typography sx={{fontSize: 12}}>Via Borgonuovo, 23 - 20121 Milano
                                MM2 Lanza - MM3 Montenapoleone
                                Tram 1 / Bus 61, 94
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={3} sx={{ marginTop: '10px' }}>
                    <Grid container direction="column">
                        <Grid item><Typography sx={{color: '#b33030'}} variant="p">ORARI DI APERTURA</Typography></Grid>
                        <Grid item xs={3} sx={{ marginTop: 0 }}>
                            <Typography sx={{fontSize: 12}}>da martedì a domenica
                                10.00 - 17.30 (ultimo ingresso ore 17)

                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem style={{ backgroundColor: 'white', width: 1, margin: 20 }} />
                <Grid item xs={3} sx={{ marginTop: '10px' }}>
                    <Grid container direction="column" alignItems="flex-start" justifyContent="center">
                        <Grid item xs={1}><Typography sx={{color: '#b33030'}} variant="p">CONTATTI</Typography></Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3} sx={{ marginTop: 0, marginBottom: 5 }}>
                            <Typography sx={{fontSize: 12}}>Via Borgonuovo, 23 - 20121 Milano
                                MM2 Lanza - MM3 Montenapoleone
                                Tram 1 / Bus 61, 94
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
        )
    }
}