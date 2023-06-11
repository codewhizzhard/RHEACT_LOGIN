import { useContext } from 'react'
import ProjectContext from './ProjectContent/ProjectContext'
import PRODUCTS from './products'
import Items from './Items'

import { useNavigate } from 'react-router-dom'

const SellProducts = () => {
  const navigate = useNavigate()
  const { products } = useContext(ProjectContext)
  return (
    <main>
      <h1 className="text-red-400 flex gap-44 mt-10 pl-20">
      SELL YOUR DESIREABLE PRODUCTS <span className="text-red-300 bg-red-100 hover:cursor-pointer w-12 hover:rounded-full rounded justify-center flex" onClick={() => navigate("/market")}>back</span>
      </h1>
      <hr />
      <section className='mt-4 w-[96%] h-[460px] ml-3 overflow-y-auto'>
          {PRODUCTS.map((product) => {
            if (products[product.id] !== 0 ) {
              return (<Items data={product} />)}})}
    </section> 
    </main>
  )}


export default SellProducts