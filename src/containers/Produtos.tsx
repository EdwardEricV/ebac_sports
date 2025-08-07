import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ favoritos }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((fav) => fav.id === produto.id)
  }

  const { data: produtosData, isLoading } = useGetProdutosQuery()
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtosData?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
