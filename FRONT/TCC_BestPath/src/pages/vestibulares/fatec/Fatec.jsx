import styles from "./Fatec.module.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Banner from "../../../components/vestibular/banner/Banner";
import FatecLogo from "../../../../public/images/fatec_banner.png";
import About from "../../../components/vestibular/about/About";
import Calendar from "../../../components/vestibular/calendar/Calendar";
import ImportantLinks from "../../../components/vestibular/importantLinks/ImportantLinks";

function Fatec() {
    return(
        <>
            <Header />

            <div className={styles.container}>

                    <Banner
                    src={FatecLogo}
                    text="Faculdade de Tecnologia de São Paulo" />
                    
                    <div>
                        <ImportantLinks
                        link01="https://www.fatecsp.br/#"

                        text01="Vestibular"
                        link02="https://vestibular.fatec.sp.gov.br/"

                        text02="Cursos"
                        link03="https://www.fatecsp.br/paginas/cursos.php"

                        text03="Contatos"
                        link04="https://www.fatecsp.br/paginas/fale_conosco.php"
                            
                        text04="Os principais links para você não ficar muito perdido em busca de uma informação! 😉"/>

                        <About 
                        content="O vestibular da Fatec (Faculdade de Tecnologia do Estado de São Paulo) é um processo seletivo para ingresso em cursos de graduação tecnológica. A Fatec oferece mais de 30 mil vagas em mais de 70 cursos presenciais gratuitos, distribuídos em várias unidades do estado de São Paulo." />

                        <div className={styles.calendar}>
                            <Calendar 
                            title="Últimas notícias:"
                            content="6 a 10 de Janeiro de 2025 - Provas de Competências Específicas - Artes Cênicas (São Paulo)"/>
                        </div>
                    </div>
            </div>

            <Footer />
        </>
    )
}

export default Fatec;