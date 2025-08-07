import { GlobalStyle } from './styles'
import { RootState } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { favoritar } from './store/reducers/favoritos'

import Header from './components/Header'
import Produtos from './containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const favoritarProduto = (produto: Produto) => {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos favoritos={favoritos} favoritar={favoritarProduto} />
      </div>
    </>
  )
}

export default App
