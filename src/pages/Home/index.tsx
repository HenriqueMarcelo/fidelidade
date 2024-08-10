import Header from '../../components/Header'
import Product from '../../components/Product'
import ShoppingCart from '../../components/ShoppingCart'
import './styles.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container home__container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {/* <ShoppingCart /> */}
    </>
  )
}
