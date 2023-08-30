import React from 'react'
import { useEffect } from 'react'
import { limitsWords } from '../CardProducts'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function TableCart({ products }) {
  const cart = useSelector((state) => state.cart.data)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, products])
  return (
    <>
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
              const product = products.find((product) => product.id === i.id)

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
              {totalPrice.toLocaleString('id-ID', {
                styles: 'currency',
                currency: 'IDR',
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
