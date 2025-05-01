import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import styles from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom"; 
import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from "../../../services/firebaseConfig";
import { useAuth } from "../../context/AuthContext";


function SignIn() {
    const { setUsuario } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [blocked, setBlocked] = useState(false);
    const navigate = useNavigate(); 

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    // 🔥 1. Buscar nome no banco depois que o Firebase fizer login
    useEffect(() => {
        async function buscarNomeDoUsuario() {
            if (user) {
                try {
                    const emailDoUsuario = user.user.email;

                    const response = await fetch(`http://127.0.0.1:2024/login?email=${emailDoUsuario}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    const dados = await response.json();

                    if (dados && dados.nome) {
                        setUsuario({
                            nome: dados.nome,
                            email: dados.email
                        });

                        navigate("/user");
                    } else {
                        console.error("Usuário não encontrado no banco");
                    }

                } catch (error) {
                    console.error("Erro ao buscar usuário:", error);
                }
            }
        }

        buscarNomeDoUsuario();
    }, [user]); // dispara quando o usuário for logado

    // 🔒 2. Validação e login com Firebase
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (blocked) {
            Swal.fire({
                icon: 'error',
                title: 'Conta bloqueada!',
                text: 'Sua conta foi temporariamente bloqueada devido a tentativas de login malsucedidas.',
                timer: 3000
            });
            return;
        }

        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Campos obrigatórios',
                text: 'Preencha todos os campos.'
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(email, password); // Firebase login
        } catch (err) {
            console.log("Erro no Firebase:", err);
        }

        // aqui não precisa mais navegar nem validar manualmente
        // isso agora é feito no useEffect quando o Firebase autenticar
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.box}>
                    <p>E-mail</p>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <p>Senha</p>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link to="/" className={styles.link}>
                        <span>Esqueci a senha</span>
                    </Link>

                    <Button 
                        onClick={handleSubmit}
                        className={styles.buttonEnter}
                        text="Entrar"
                    />

                    <div>
                        <p>Não tenho conta, quero me 
                            <Link to="/signup" className={styles.link}>
                                <span> cadastrar!</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
