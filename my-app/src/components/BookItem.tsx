import type { Livro } from "../tipos/Livro";
import styles from "./BookItem.module.css"

type BookItem = {
    livro: Livro
    aoRemover: (id: string) => void
}

const LivroItem = ({ livro, aoRemover } : BookItem) => {
  
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
            <div>
                <button className={styles.button} onClick={() => aoRemover(livro._id)}
>
  REMOVER
</button>
            </div>
        </div>
    )
}

export default LivroItem;