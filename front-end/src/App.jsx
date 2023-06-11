import Personal from "./Personal"
import Nav from "./NavBar"
import Market from "./Market"
import { Route, Routes } from "react-router-dom"
import Buy from "./Buy"
import SellProducts from "./SellProducts"
import ReadMe from "./ReadMe"
import Contact from "./Contact"
import { ContextProvider } from "./ProjectContent/ProjectContext"
function App() {


  return (
    <div className="bg-white flex">
      <div className="ml-10 mt-6">
        <Nav />
      </div>
       <div className="mt-10 ml-20 font-bold bg-slate-800 w-1/2 h-[550px] rounded-[20px] border-red-300 shadow-lg shadow-slate-800 border-b-4 overflow-hidden">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Personal/>} />
            <Route path="readme" element={<ReadMe/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="market">
              <Route index element={<Market />}/>
              <Route path="buy" element={<Buy />} /> 
              <Route path="sell" element={<SellProducts />} /> 
            </Route>  
          </Routes> 
        </ContextProvider>
      </div>
    </div>
  )
}

export default App
