import FormularioCadastro from './components/BookForm.tsx'

function App() {
  
  const notification = () => {
    console.log("Cadastro realizado");
  }

  return (
    <>
    <FormularioCadastro aoEnviar={notification}/>
    </>


  )
}

export default App
