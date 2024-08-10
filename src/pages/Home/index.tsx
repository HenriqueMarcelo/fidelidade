import Product from '../../components/Product'
import './styles.scss'

export default function Home() {
  return (
    <div className="container home__container">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}
