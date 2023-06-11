import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <nav className="w-56 bg-green-400 rounded-[15px] h-[570px] border-b-4 border-red-300">
      <ul >
        <Link to={"/"}>
          <li className="top-5 relative ">
            <div className="inline-block absolute left-4 top-6">
              <span className="rounded-full border-red-300  border-2 w-8 h-8 flex justify-center items-center border-b-4 hover:bg-red-300"><b>1</b></span>
            </div>
            <div className="inline-block absolute top-4 left-14">
              <figure className="text-sm">
                step 1
                <figcaption className="font-bold">YOUR INFO</figcaption>
              </figure>
            </div>
          </li>
        </Link>
        <Link to={"readme"}>
          <li className="relative top-[84px]">
            <div className="inline-block absolute left-4 top-6">
              <span className="rounded-full border-red-300  border-2 w-8 h-8 flex justify-center items-center border-b-4 hover:bg-red-300"><b>2</b></span>
            </div>
            <div className="inline-block absolute top-4 left-14">
              <figure className="text-sm">
                step 2
                <figcaption className="font-bold">READ ME</figcaption>
              </figure>
            </div>
          </li>
        </Link>
        <Link to={'contact'}>
          <li className=" relative top-36">
            <div className="inline-block absolute left-4 top-6">
              <span className="rounded-full border-red-300  border-2 w-8 h-8 flex justify-center items-center border-b-4 hover:bg-red-300"><b>3</b></span>
            </div>
            <div className="inline-block absolute top-4 left-14">
              <figure className="text-sm">
                step 3
                <figcaption className="font-bold">CONTACT US</figcaption>
              </figure>
            </div>
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav