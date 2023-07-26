import { Fragment } from 'react'
import Buttons from '../../Elements/Buttons'

const CardProducts = ({ children }) => {
  return (
    <Fragment>
      <div className="w-full max-w-sm flex flex-col justify-between bg-gray-800 border border-gray-700 rounded-lg shadow">
        {children}
      </div>
    </Fragment>
  )
}

const Header = ({ imgSrc }) => {
  return (
    <a href="">
      <img src={imgSrc} alt="Sepatu Baru" className="p-8 rounded-l-lg" />
    </a>
  )
}

const Body = ({ title, children }) => {
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
          {title}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  )
}

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-white">Rp {price}</span>
      <Buttons btnStyle="bg-blue-600 hover:bg-blue-700">Add to Cart</Buttons>
    </div>
  )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts
