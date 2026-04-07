import type { Livro } from "../tipos/Livro";

type BookItem = {
    livro: Livro
}


const LivroItem = ({livro} : BookItem) => {

    return (
        <div>
            <div>
                <strong>{livro.nome}</strong>
            </div>
            <div>
                <p>{livro.autor}</p>
            </div>
            <div>
                <p>{livro.ano}</p>
            </div>
        </div>
    )
}

export default LivroItem;