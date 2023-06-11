import ProjectContext from "./ProjectContent/ProjectContext"
import { useContext, useState } from "react"

const Items = (props) => {

  const [profit, setProfit] = useState(1)
  const [sum, setSum] = useState(0)
  const {removeProduct, products} = useContext(ProjectContext)
  const {id, productName, productImage, price} = props.data

  const addProfit = () => {
    setProfit((prev) => prev + 1)
  }
  const removeProfit = () => {
    setProfit((prev) => prev - 1)
  }
  const callAll = () => {
    () => removeProduct(id);
    {sum < products[id] && setSum((prev) => prev + 1)}
  }

  const newPrice = price * profit
  const total = newPrice * sum
  return (
    <div className="flex">
        <div className="w-[350px] bg-green-400 mb-4 pl-2">
          <img src={productImage} className="pt-5 rounded-lg h-44 w-48" />
          <p className="pt-3">{productName}</p>
            <div className="flex items-center">
              <div className="bg-white w-6 h-4 flex justify-center items-center hover:cursor-pointer">{profit > 1 && <span onClick={removeProfit} >-</span>}</div>
              <span>{profit}</span>
              <div className="bg-white w-7 h-4 flex justify-center items-center hover:cursor-pointer">{profit < 4 && <span onClick={addProfit} >+</span>}</div>
            </div>
          <button onClick={callAll} className="w-16 text-white block hover:bg-white bg-black rounded-full text-sm hover:text-black mb-1">SELL</button>
        </div>
        <div className="pl-5 flex flex-col gap-y-8 pt-5">
          <p className="gap-x-16 flex bg-slate-500 px-1">AMOUNT<b className="text-white"> ${newPrice}</b> </p>
          <span className="text-slate-400">PRODUCTS({products[id]})</span>
          <span className="text-slate-400">SOLD OUT ({sum})</span>
          <p className="font-extrabold text-lg pt-3 text-red-400">Total Price: <span className="text-white">${total}</span> </p>
        </div>
    </div>  
  )
}

export default Items
