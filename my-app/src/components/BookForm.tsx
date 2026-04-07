import { useState } from "react";
import type { Livro } from "../tipos/Livro";

type BookForm = {
    aoEnviar : (livro : Livro) => void;
}

const FormularioCadastro = ({ aoEnviar } : BookForm) => {

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();

        if(!nome || !autor || !ano) return; // para invalidar cadastro se houver algum campo em branco

        aoEnviar({id: 0, nome, autor, ano});  // função para que o botão faça o envio do formulário
        setNome('');
        setAutor('');
        setAno('');
    }

    return (
        <form onSubmit={enviar}>
            <h2>Registre um novo livro!</h2>
            <input type="text" placeholder="nome do livro" 
            value={nome} onChange={(e) => setNome(e.target.value)}/>

            <input type="text" placeholder="nome do autor"
            value={autor} onChange={(e) => setAutor(e.target.value)}/>

            <input type="number" placeholder="ano de lançamento"
            value={ano} onChange={(e) => setAno(e.target.value)}/>

            <button type="submit">CADASTRAR</button>    
        </form>
    )
}

export default FormularioCadastro