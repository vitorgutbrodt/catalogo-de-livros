type BookItem = {
    nome: string,
    autor: string, 
    lançamento: number,
}

const Livro = ({ nome, autor, lançamento } : BookItem) => {
  return (
    <>
    <h1>{nome}</h1>
    <h2>{autor}</h2>
    <h4>{lançamento}</h4>
    </>
  )

}

export default Livro
