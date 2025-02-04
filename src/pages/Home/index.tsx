import Product from '../../components/Product'
import styles from './styles.module.scss'
import { ProductContext } from '../../contexts/ProductContext.tsx'
import { useContext } from 'react'
import { ErrorBanner } from '../../components/ErrorBanner/index.tsx'

export default function Home() {
  const { products, error } = useContext(ProductContext)

  if (error) {
    return (
      <div className="container">
        <ErrorBanner />
      </div>
    )
  }

  return (
    <div className={`container ${styles['home__container']}`}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
