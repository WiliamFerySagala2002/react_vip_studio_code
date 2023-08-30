import { Fragment, useEffect, useState } from 'react'
import CardProducts from '../../components/Fragments/CardProducts'
import Buttons from '../../components/Elements/Buttons'
import { getProducts } from '../../services/product.service'
import { useLogin } from '../../hooks/useLogin'
import TableCart from '../../components/Fragments/TableCart'

const ProductPages = () => {
  const [products, setProducts] = useState([])
  const user = useLogin()

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('cart')
    window.location.href = '/login'
  }

  return (
    <Fragment>
      <div className="bg-[#ffffff] w-full h-sreen " data-thema="light">
        <div className="flex  justify-end py-2 px-5 gap-2 items-center h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
          <h5 className="text-white font-bold text-md uppercase">{user}</h5>
          <Buttons btnStyle="bg-blue-600" onClick={handleLogout}>
            Logout
          </Buttons>
        </div>
        <div className="px-2 py-3 flex">
          <div className="flex flex-wrap w-[65%] gap-2">
            {products.length > 0 &&
              products.map((product) => (
                <CardProducts key={product.id}>
                  <CardProducts.Header imgSrc={product.image} id={product.id} />
                  <CardProducts.Body title={product.title}>
                    {product.description}
                  </CardProducts.Body>
                  <CardProducts.Footer price={product.price} id={product.id} />
                </CardProducts>
              ))}
          </div>
          <div className="w-[35%]">
            <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

            <TableCart products={products} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductPages
