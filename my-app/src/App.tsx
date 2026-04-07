import { useState } from 'react';
import FormularioCadastro from './components/BookForm.tsx'
import ListaLivros from './components/BookList.tsx'
import type { Livro } from "./tipos/Livro.ts";

function App() {

  const [livros, setLivros] = useState<Livro[]>([])

  const adicionarLivro = (dados : Livro) => {
    const novoLivro : Livro = {
      ...dados,
      id: 1
    }
    console.log("Livro cadastrado!");
    setLivros(prev => [...prev, novoLivro]);
  }

  return (
    <>
    <FormularioCadastro aoEnviar={adicionarLivro}/>
    <ListaLivros livros={livros}/>
    </>


  )
}

export default App
