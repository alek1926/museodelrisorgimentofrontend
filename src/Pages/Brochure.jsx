import Grid from '@mui/material/Grid';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Brochure() {

    return (
        <>
            <Navbar></Navbar>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: '20px', marginBottom: '380px' }}>
                <a href="http://www.museodelrisorgimento.mi.it/fileadmin/risorgimento/Brochure_Moriggia_nuova/IT_Palazzo_Moriggia_DEF_13.06.2018.pdf">pieghevole Palazzo Moriggia | Museo del Risorgimento</a>
                <a href="http://www.museodelrisorgimento.mi.it/fileadmin/civiche/BROCHURE/Palazzo_Moriggia_brochure_EN_19.5.2016.pdf">pieghevole percorso museale_EN</a>
            </Grid>
            <Footer></Footer>
        </>
    )
}