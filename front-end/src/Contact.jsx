import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import Footer from "./Footer"

const Contact = () => {
  return (
    <main>
       <h1 className="text-red-400 flex justify-center mt-10">WELCOME TO CONTACT</h1>
       <hr />
      <section className="flex flex-col space-y-56">
        <div className="flex justify-center pt-48 gap-10">
          <span className="relative content-[''] after:absolute after:top-8 after:right-0 after:h-1 after:w-0 after:bg-red-400 after:content-[''] hover:after:w-full hover:after:rounded"><FaFacebook className="h-8 w-8 hover:text-red-400 text-white hover:p-1"/></span>
          <span className="relative content-[''] after:absolute after:top-8 after:right-0 after:h-1 after:w-0 after:bg-red-400 after:content-[''] hover:after:w-full hover:after:rounded"><FaTwitter className="h-8 w-8 hover:text-red-400 text-white hover:p-1"/></span>
          <span className="relative content-[''] after:absolute after:top-8 after:right-0 after:h-1 after:w-0 after:bg-red-400 after:content-[''] hover:after:w-full hover:after:rounded"><FaInstagram className="h-8 w-8 hover:text-red-400 text-white hover:p-1"/></span>
          <span className="relative content-[''] after:absolute after:top-8 after:right-0 after:h-1 after:w-0 after:bg-red-400 after:content-[''] hover:after:w-full hover:after:rounded"><FaWhatsapp className="h-8 w-8 hover:text-red-400 text-white hover:p-1"/></span>
          <span className="relative content-[''] after:absolute after:top-8 after:right-0 after:h-1 after:w-0 after:bg-red-400 after:content-[''] hover:after:w-full hover:after:rounded"><FaGithub className="h-8 w-8 hover:text-red-400 text-white hover:p-1"/></span>
          <span className="relative content-[''] after:absolute after:top-8 after:right-0 after:h-1 after:w-0 after:bg-red-400 after:content-[''] hover:after:w-full hover:after:rounded"><FaLinkedin className="h-8 w-8 hover:text-red-400 text-white hover:p-1"/></span>
        </div>
        <><Footer /></>
      </section>
    </main>
  )
}

export default Contact



