import React from 'react'
import { useContext } from 'react'
import ProjectContext from './ProjectContent/ProjectContext'

const Product = ({product, amountLeft}) => {
  const {addProduct} = useContext(ProjectContext)
  const {id, productName, productImage, price} = product
  return (
    <div className="bg-green-400 mb-5 text-black p-2">
      <img src={productImage} className="pt-5 rounded-lg h-44 w-48 " />
      <p className="pt-3">{productName}</p>
      <span>${price}</span>
      <button className='w-16 text-white block hover:bg-white bg-black rounded-full text-sm hover:text-black' onClick={() => addProduct(id)}>{amountLeft >= price && "ADD"}</button>
    </div>
  )
}

export default Product
