import type {Livro} from '../tipos/Livro'
import LivroItem from './BookItem';

type BookList = {
    livros : Livro[];
}

const ListaLivros = ({livros} : BookList) => {

    if(livros.length === 0)
        return(<p>Nenhum livro registrado</p>)

    return (
        <div>
            {
                livros.map(item => (<LivroItem key={item.id} livro={item}/>))
            }
        </div>
    )
}

export default ListaLivros;