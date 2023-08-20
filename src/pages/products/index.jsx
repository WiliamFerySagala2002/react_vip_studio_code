import { Fragment, useEffect, useRef, useState } from 'react'
import CardProducts from '../../components/Fragments/CardProducts'
import Buttons from '../../components/Elements/Buttons'
import Counter from '../../components/Fragments/Counter'

const dbProduct = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 150000,
    image: 'public/image/shoes-1.jpg',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam voluptates ipsum dicta earum repudiandae temporibus, 
           iure atque  harum molestias vero minus, quas molestiae, ipsa odio praesentium`,
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    price: 100000,
    image: 'public/image/shoes-1.jpg',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam voluptates ipsum `,
  },
  {
    id: 3,
    name: 'Sepatu Trending',
    price: 250000,
    image: 'public/image/shoes-1.jpg',
    info: `Sepatu tranding buatan anak bangsa, bergaya bersama karya anak bangsa === "Cinta tanah air"`,
  },
  {
    id: 4,
    name: 'Sepatu Baru',
    price: 200000,
    image: 'public/image/shoes-1.jpg',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam voluptates ipsum dicta earum repudiandae temporibus, 
           iure atque  harum molestias vero minus, quas molestiae, ipsa odio praesentium`,
  },
  {
    id: 5,
    name: 'Sepatu Lama',
    price: 80000,
    image: 'public/image/shoes-1.jpg',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam voluptates ipsum `,
  },
  {
    id: 6,
    name: 'Sepatu Trending',
    price: 400000,
    image: 'public/image/shoes-1.jpg',
    info: `Sepatu tranding buatan anak bangsa, bergaya bersama karya anak bangsa === "Cinta tanah air"`,
  },
]

const email = localStorage.getItem('email')

const ProductPages = () => {
  const [cart, setCart] = useState([])
  const [prices, setPrices] = useState(0)

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = dbProduct.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setPrices(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const handleAddtoCart = (id) => {
    if (cart.find((i) => i.id === id)) {
      setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)))
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart') || []))

  // const handleAddtoCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }]
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current))
  // }

  return (
    <Fragment>
      <div className="bg-[#ffffff] w-full h-sreen " data-thema="light">
        <div className="flex  justify-end py-2 px-5 gap-2 items-center h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
          <h5 className="text-white font-bold text-md">{email}</h5>
          <Buttons btnStyle="bg-blue-600" onClick={handleLogout}>
            Logout
          </Buttons>
        </div>
        <div className="px-2 py-3 flex">
          <div className="flex flex-wrap w-[65%] gap-2">
            {dbProduct.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header imgSrc={product.image} />
                <CardProducts.Body title={product.name}>
                  {product.info}
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
                {cart.map((i) => {
                  const products = dbProduct.find(
                    (product) => product.id === i.id
                  )

                  return (
                    <tr key={i.id}>
                      <td>{products.name}</td>
                      <td>
                        Rp{' '}
                        {products.price.toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td>{i.qty}</td>
                      <td>
                        {(products.price * i.qty).toLocaleString('id-ID', {
                          styles: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                    </tr>
                  )
                })}
                <tr className="font-bold bg-base-200">
                  <td colSpan={3}>Prices</td>
                  <td>
                    Rp{' '}
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
