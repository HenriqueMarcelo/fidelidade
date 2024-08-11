import Product from '../../components/Product'
import styles from './styles.module.scss'
import { ProductContext } from '../../contexts/ProductContext.tsx'
import { useContext } from 'react'

export default function Home() {
  const { products } = useContext(ProductContext)

  return (
    <div className={`container ${styles['home__container']}`}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
