import { Fragment } from 'react'
import CardProducts from '../../components/Fragments/CardProducts'
import Buttons from '../../components/Elements/Buttons'

const dbProduct = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: '1.000.000',
    image: 'public/image/shoes-1.jpg',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam voluptates ipsum dicta earum repudiandae temporibus, 
           iure atque  harum molestias vero minus, quas molestiae, ipsa odio praesentium`,
  },
  {
    id: 2,
    name: 'Sepatu Lama',
    price: '500.000',
    image: 'public/image/shoes-1.jpg',
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quibusdam voluptates ipsum `,
  },
  {
    id: 3,
    name: 'Sepatu Trending',
    price: '3.500.000',
    image: 'public/image/shoes-1.jpg',
    info: `Sepatu tranding buatan anak bangsa, bergaya bersama karya anak bangsa === "Cinta tanah air"`,
  },
]

const email = localStorage.getItem('email')
const handleLogout = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('password')
  window.location.href = '/login'
}

const ProductPages = () => {
  return (
    <Fragment>
      <div className="flex justify-end py-2 px-5 gap-2 items-center bg-gray-500 ">
        <h5 className="text-white font-bold text-md">{email}</h5>
        <Buttons btnStyle="bg-blue-600" onClick={handleLogout}>
          Logout
        </Buttons>
      </div>
      <div className="px-2 py-3">
        <div className="flex flex-wrap max-w-6xl gap-2">
          {dbProduct.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header imgSrc={product.image} />
              <CardProducts.Body title={product.name}>
                {product.info}
              </CardProducts.Body>
              <CardProducts.Footer price={product.price} />
            </CardProducts>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default ProductPages
