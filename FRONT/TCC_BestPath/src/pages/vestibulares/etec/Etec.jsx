import styles from "./Etec.module.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Banner from "../../../components/vestibular/banner/Banner";
import EtecLogo from "../../../../public/images/etec_banner.png"
import About from "../../../components/vestibular/about/About";
import Calendar from "../../../components/vestibular/calendar/Calendar";
import ImportantLinks from "../../../components/vestibular/importantLinks/ImportantLinks";

function Etec() {
    return(
        <>
            <Header />

            <div className={styles.container}>

                    <Banner
                    src={EtecLogo}
                    text="Escola Técnica Estadual" />
                    
                    <div>
                        <ImportantLinks
                        link01="https://www.vestibulinhoetec.com.br/home/"

                        text01="Dúvidas frequentes"
                        link02="https://www.vestibulinhoetec.com.br/duvidas-frequentes/"

                        text02="Unidades e cursos"
                        link03="https://www.vestibulinhoetec.com.br/unidades-cursos/"

                        text03="Contatos"
                        link04="https://www.vestibulinhoetec.com.br/fale-conosco/"
                            
                        text04="Os principais links para você não ficar muito perdido em busca de uma informação! 😉"/>

                        <About 
                        content="O Vestibulinho ETEC é um processo seletivo que oferece vagas para estudantes que desejam ingressar em cursos técnicos e médios em Escolas Técnicas Estaduais (ETECs) administradas pelo Centro Paula Souza. Este vestibular é destinado principalmente a estudantes do ensino fundamental que buscam cursar o ensino técnico e médio." />

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

export default Etec;