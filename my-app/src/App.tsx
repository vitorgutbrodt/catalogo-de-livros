import { useEffect, useState } from 'react';
import FormularioCadastro from './components/BookForm.tsx'
import ListaLivros from './components/BookList.tsx'
import type { Livro } from "./tipos/Livro.ts";
import axios from 'axios';

const API_URL = "https://crudcrud.com/api/056069dec7904d0fa92fd5bcce3f41c5/livros"

function App() {  

  const [livros, setLivros] = useState<Livro[]>([])

  const adicionarLivro = (dados : Livro) => {

    axios
    .post<Livro>(API_URL, dados)
    .then(resposta => setLivros(prev => [...prev, resposta.data]))   
    console.log("Livro cadastrado!");   
  }

  const removerLivro = (id: string) => {
    axios
    .delete(`${API_URL}/${id}`)
    .then(() => setLivros(prev => prev.filter(livro => livro._id !== id)))
  }

  useEffect(() => {
    //fetch
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