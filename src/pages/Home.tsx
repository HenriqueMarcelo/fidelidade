import Header from '../components/Header'
import Product from '../components/Product'
import './Home.scss'

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
    </>
  )
}
