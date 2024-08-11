import Product from '../../components/Product'
import './styles.scss'
import { ProductContext } from '../../contexts/ProductContext.tsx'
import { useContext } from 'react'

export default function Home() {
  const { products } = useContext(ProductContext)
  //todo: utilizar display grid
  return (
    <div className="container home__container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
