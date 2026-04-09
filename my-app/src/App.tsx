import { useEffect, useState } from 'react';
import FormularioCadastro from './components/BookForm.tsx'
import ListaLivros from './components/BookList.tsx'
import type { Livro } from "./tipos/Livro.ts";
import axios from 'axios';

const API_URL = "https://crudcrud.com/api/72a2e2d7986a4c1893d67826f8369c89/livros";

function App() {

  const [livros, setLivros] = useState<Livro[]>([])

  const adicionarLivro = (dados : Livro) => {
    //fetch para cadastrar livro na API
    axios
    .post<Livro>(API_URL, dados);
    .then((resposta: { data: Livro; }) => setLivros(prev => [...prev, resposta.data]));
    
    console.log("Livro cadastrado!");    
  }

  const removerLivro = async (_id: string) => {
    //fetch para remover livro na API
  await axios.delete(`${API_URL}/${_id}`);

  setLivros(prev => prev.filter(livro => livro._id !== _id));
  };

  useEffect(() => {
    //fetch para pegar dados da API
    axios
    .get<Livro[]>(API_URL)
    .then(resposta => setLivros(resposta.data));
  },[])

  return (
    <>
    <FormularioCadastro aoEnviar={adicionarLivro}/>
    <ListaLivros livros={livros} aoRemover={removerLivro}/>
    </>


  )
}

export default App
