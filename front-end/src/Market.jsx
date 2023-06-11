import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Market = () => {

  return (
    <main>
      <h1 className="text-red-400 justify-center flex pt-20">WELCOME TO WORLD MARKET</h1>
      <hr className='h-10' />
      <article className="flex mt-16">
        <section className="ml-16">
          <Link to={'buy'}>
            <div className="h-56 w-56 rounded-[20px]  border-slate-400 bg-slate-700 shadow-lg justify-center items-center flex flex-col border-[1px] transform hover:scale-[.8]">
              <p className='h-[138px] flex items-center mt-5 font-bold text-xl'>BUY PRODUCTS</p>
              <span className='bg-green-400 w-56 rounded-b-[16px] h-36 flex justify-center border-b-8'><FontAwesomeIcon icon={faCartPlus} size='4x' className='mt-4 hover:transition-[0.4s] hover:rotate-[360deg] hover:scale-50' /></span>
            </div>
          </Link>
        </section>
        <section className="ml-10">
          <Link to={"sell"}>
            <div className="h-56 w-56 rounded-[20px]  border-slate-400 bg-slate-700 shadow-lg justify-center items-center flex flex-col border-[1px] transform hover:scale-[.8]">
              <p className='h-[138px] flex items-center mt-5 font-bold text-xl'>SELL PRODUCTS</p>
              <span className='bg-green-400 w-56 rounded-b-[16px] h-36 flex justify-center border-b-8'><FontAwesomeIcon icon={faCartPlus} size='4x' className='mt-4 hover:transition hover:transition-[0.4s] hover:rotate-[360deg] hover:scale-50' /></span>
            </div>
          </Link>
        </section>
      </article>
    </main>
  )
}

export default Market