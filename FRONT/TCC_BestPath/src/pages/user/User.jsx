import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import Favorite from "../../components/user/favorite/Favorite";
import News from "../../components/user/news/News";
import { useAuth } from "../../context/AuthContext";
import styles from "./User.module.css";

function User() {
  const [noticias, setNoticias] = useState([]);
  const { usuario } = useAuth();
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const imagens = [
    "public/perfis/1da2f1d6-a0ea-48c7-90dd-c6fc371fc42b.jpg",
    "public/perfis/2c6a5358-40ca-4a11-8524-b41aaedd4d16.jpg",
    "public/perfis/4febbdb9-5e9c-471c-9b02-b13224f1ee52.jpg",
    "public/perfis/71c4a270-7090-4fa5-8209-ad73ee9b0d0c.jpg",
    "public/perfis/d80ba10c-0b24-47ed-bbee-a83007e8569a.jpg",
    "public/perfis/e8a470a8-0bd5-4d3b-a89c-5c8a4382c8f2.jpg",
    "public/perfis/ea3913e9-0ef0-40b1-a373-368b7cab79da.jpg",
  ];

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("http://localhost:2024/noticias");
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };
    fetchNoticias();
  }, []);

  return (
    <>
      <Header />

      <p>User</p>

      <div className={styles.container}>
        {/* Foto de perfil e favoritos */}
        <div className={styles.userAndFavorite}>
          <div className={styles.user}>
            <div className={styles.photo} onClick={() => setMostrarOpcoes(true)}>
              {fotoSelecionada ? (
                <img
                  src={fotoSelecionada}
                  alt="Foto de perfil"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%", // Garante que a imagem seja redonda
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div className={styles.placeholderText}>Foto de perfil</div>
              )}
            </div>
            <p>{usuario?.nome}</p>
          </div>

          {mostrarOpcoes && (
            <div className={styles.opcoes}>
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Opção ${index + 1}`} // Corrigido o template literal aqui
                  onClick={() => {
                    setFotoSelecionada(img);
                    setMostrarOpcoes(false);
                  }}
                  className={styles.opcaoImagem}
                />
              ))}
            </div>
          )}

          <div className={styles.userFavorites}>
            <p>Os vestibulares de seu interesse:</p>
            <div className={styles.favorites}>
              <div className={styles.vestibulares}>
                <div>
                  <Favorite title="Fuvest" />
                  <Favorite />
                  <Favorite />
                </div>
                <div>
                  <Favorite />
                  <Favorite />
                  <Favorite />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.news}>
          <p>Últimas notícias dos seus favoritos:</p>
          {noticias.length > 0 ? (
            noticias.map((noticia) => (
              <News
                key={noticia.id_data}
                title={noticia.nome}
                content={
                  noticia.fdata +
                  " - " +
                  noticia.tipo_evento +
                  " - " +
                  noticia.descricao
                }
              />
            ))
          ) : (
            <p>Carregando notícias...</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default User;
