import { useState } from "react";

type BookForm = {
    aoEnviar : () => void;
}

const FormularioCadastro = ({ aoEnviar } : BookForm) => {

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [ano, setAno] = useState('');

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        aoEnviar();  // função para que o botão faça o envio do formulário
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