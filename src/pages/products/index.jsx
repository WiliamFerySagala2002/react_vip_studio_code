import { Fragment, useEffect, useRef, useState } from 'react'
import CardProducts, {
  limitsWords,
} from '../../components/Fragments/CardProducts'
import Buttons from '../../components/Elements/Buttons'
import Counter from '../../components/Fragments/Counter'
import { getProducts } from '../../services/product.service'
import { getUsername } from '../../services/auth.service'
import { useLogin } from '../../hooks/useLogin'

const ProductPages = () => {
  const [cart, setCart] = useState([])
  const [prices, setPrices] = useState(0)
  const [products, setProducts] = useState([])
  const user = useLogin()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setPrices(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])

  const handleAddtoCart = (id) => {
    if (cart.find((i) => i.id === id)) {
      setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)))
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }

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
                  <CardProducts.Footer
                    price={product.price}
                    id={product.id}
                    addToCart={handleAddtoCart}
                  />
                </CardProducts>
              ))}
          </div>
          <div className="w-[35%]">
            <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

            <table className="table ">
              <thead className="bg-base-200 ">
                <tr className="">
                  <th>
                    <b>Product</b>
                  </th>
                  <th>
                    <b>Price</b>
                  </th>
                  <th>
                    <b>Ouantity</b>
                  </th>
                  <th>
                    <b>Total</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((i) => {
                    const product = products.find(
                      (product) => product.id === i.id
                    )

                    return (
                      <tr key={i.id}>
                        <td>{limitsWords(product.title, 3)}</td>
                        <td>
                          ${' '}
                          {product.price.toLocaleString('en-US', {
                            styles: 'currency',
                            currency: 'USD',
                          })}
                        </td>
                        <td>{i.qty}</td>
                        <td>
                          ${' '}
                          {(product.price * i.qty).toLocaleString('en-US', {
                            styles: 'currency',
                            currency: 'USD',
                          })}
                        </td>
                      </tr>
                    )
                  })}
                <tr className="font-bold bg-base-200">
                  <td colSpan={3}>Prices</td>
                  <td>
                    ${' '}
                    {prices.toLocaleString('id-ID', {
                      styles: 'currency',
                      currency: 'IDR',
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductPages
