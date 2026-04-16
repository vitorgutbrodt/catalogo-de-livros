import { useState } from "react";
import type { Livro } from "../tipos/Livro";
import styles from "./BookForm.module.css"

type BookForm = {
    aoEnviar : (livro : Livro) => void;
}

const FormularioCadastro = ({ aoEnviar } : BookForm) => {

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState<number>();

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        if(!nome || !autor || !ano) return; // para invalidar cadastro se houver algum campo em branco

        aoEnviar({id: 0, nome, autor, ano});  // função para que o botão faça o envio do formulário
        setNome('');
        setAutor('');
        setAno('');
    }

    return (
        <form className={styles.form} onSubmit={enviar}>
            <h2>Registre um novo livro!</h2>
            <input className={styles.input} type="text" placeholder="NOME DO LIVRO" 
            value={nome} onChange={(e) => setNome(e.target.value)}/>

            <input className={styles.input} type="text" placeholder="NOME DO AUTOR"
            value={autor} onChange={(e) => setAutor(e.target.value)}/>

            <input className={styles.input} type="number" placeholder="ANO DE LANÇAMENTO"
            value={ano} onChange={(e) => setAno(e.target.value)}/>

            <button className={styles.button} type="submit">CADASTRAR</button>    
        </form>
    )
}

export default FormularioCadastro