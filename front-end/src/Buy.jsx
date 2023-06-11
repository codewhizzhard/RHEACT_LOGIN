import PRODUCTS from "./products"
import Product from "./Product"
import { useContext } from 'react'
import ProjectContext from './ProjectContent/ProjectContext'
import { useNavigate } from "react-router-dom"
const Buy = () => {
  const navigate = useNavigate()
  const {products, getTotalAmount} = useContext(ProjectContext)
  let buggetedAmount = 10000
  const total = getTotalAmount()
  const amountLeft = buggetedAmount - total

  return (
  <main className="">
    <h1 className="text-red-400 flex gap-44 mt-10 pl-20">
      SELECT YOUR DESIREABLE PRODUCTS <span className="text-red-300 bg-red-100 hover:cursor-pointer w-12 hover:rounded-full rounded justify-center flex" onClick={() => navigate("/market")}>back</span>
    </h1>
    <hr />
    <section className="mt-5 grid grid-cols-2 gap-48">
      <div className="w-96 overflow-auto h-[460px] ml-3">
        {PRODUCTS.map((product) => ( 
         <Product product={product} amountLeft={amountLeft}/>
        ))}
      </div> 
      <div className="pl-2 flex flex-col text-red-300">
        <div> 
          <p className="gap-x-16 flex pb-8">BUDGET :
          <b className="text-white">${buggetedAmount}</b></p>
          <span className="">Amount Left: <span className="text-white">${amountLeft}</span></span>
        </div>
        <div className="grid pt-28">
          <p>ADDED PRODUCTS</p> 
          <b className="text-slate-500 h-52">
            <span>
              {PRODUCTS.map((product) => {
                if (products[product.id] !== 0)  return (
                    <div className="p-2">{product.productName} ({products[product.id]}) <span className="text-white pl-1">${products[product.id] * product.price}</span></div>
                  )})}
              </span>
          </b>
          <p className="font-extrabold text-lg pt-3">Total Price: <span className="text-white">${total}</span> </p>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Buy 
