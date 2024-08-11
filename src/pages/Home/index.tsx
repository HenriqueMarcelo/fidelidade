import Product from '../../components/Product'
import './styles.scss'
import { produtos } from '../../../produtos.ts'

export default function Home() {
  return (
    <div className="container home__container">
      {produtos.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
