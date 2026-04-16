import type {Livro} from '../tipos/Livro'
import LivroItem from './BookItem';

type BookList = {
    livros : Livro[];
    aoRemover: (id: string) => void;
}

const ListaLivros = ({ livros, aoRemover } : BookList) => {

    if(livros.length === 0)
        return(<p>Nenhum livro registrado</p>)

    return (
        <div>
            {
                livros.map(item => (<LivroItem key={item._id!} livro={item} aoRemover={aoRemover}/>))
            }
        </div>
    )
}

export default ListaLivros;