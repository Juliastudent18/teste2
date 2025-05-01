import styles from "./Enem.module.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Banner from "../../../components/vestibular/banner/Banner";
import EnemLogo from "../../../../public/images/enem_banner.png";
import About from "../../../components/vestibular/about/About";
import Calendar from "../../../components/vestibular/calendar/Calendar";
import ImportantLinks from "../../../components/vestibular/importantLinks/ImportantLinks";

function Enem() {
    return(
        <>
            <Header />

            <div className={styles.container}>

                    <Banner
                    src={EnemLogo}
                    text="Exame Nacional do Ensino Médio" />
                    
                    <div>
                        <ImportantLinks
                        link01="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"

                        text01="SiSU"
                        link02="https://acessounico.mec.gov.br/sisu"

                        text02="Prouni"
                        link03="https://acessounico.mec.gov.br/prouni"

                        text03="FIES"
                        link04="https://acessounico.mec.gov.br/fies"
                            
                        text04="No Site Oficial é de onde são retiradas as datas, o SISU, PROUNi e FIES são sites onde você pode utilizar a sua nota do ENEM para uma faculdade!"/>

                        <About 
                        content="O ENEM (Exame Nacional do Ensino Médio) é uma prova padronizada brasileira para o ingresso no ensino superior. Criado em 1998 pelo Ministério da Educação, o ENEM serve para avaliar o desempenho dos estudantes que concluíram o ensino médio e para selecionar candidatos para programas como o SiSU, ProUni e FIES." />

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

export default Enem;